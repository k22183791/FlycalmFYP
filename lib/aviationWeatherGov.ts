const AWC_BASE = "https://aviationweather.gov/api/data";

const USER_AGENT = "FlyCalm/1.0 (calm-flight companion app)";

export type AwcMetar = {
  icaoId?: string;
  name?: string;
  fltCat?: string;
  wspd?: number;
  wdir?: number | string;
  wxString?: string;
  rawOb?: string;
};

export type AwcPirep = {
  icaoId?: string;
  lat?: number;
  lon?: number;
  fltLvl?: number;
  acType?: string;
  tbInt1?: string;
  tbInt2?: string;
  rawOb?: string;
};

export type AwcAirport = {
  icaoId: string;
  iataId?: string;
  name?: string;
};

function awcParams(params: Record<string, string | number | undefined>) {
  const e = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined) continue;
    e.set(k, String(v));
  }
  return e.toString();
}

async function awcGetJson<T>(
  resource: string,
  query: Record<string, string | number | undefined>,
): Promise<T | null> {
  const qs = awcParams({ ...query, format: "json" });
  const res = await fetch(`${AWC_BASE}/${resource}?${qs}`, {
    headers: {
      Accept: "application/json",
      "User-Agent": USER_AGENT,
    },
  });
  if (res.status === 204) return null;
  if (!res.ok) {
    throw new Error(`Aviation Weather request failed (${res.status})`);
  }
  return (await res.json()) as T;
}

export function sanitizeAirportCodeInput(raw: string): string {
  let s = raw.trim().toUpperCase();
  s = s
    .replace(/\s*\([^)]*\)\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const tokens = s.split(/[\s,/]+/).filter(Boolean);
  const airportLike = tokens.filter((t) => /^[A-Z]{3,4}$/.test(t));
  if (airportLike.length > 0) {
    return airportLike[airportLike.length - 1];
  }
  const m = s.match(/[A-Z]{3,4}/);
  return m ? m[0] : "";
}

/** Try ICAO as entered, then US-style K-prefix for 3-letter codes. */
export function airportIdCandidates(raw: string): string[] {
  const c = sanitizeAirportCodeInput(raw);
  if (!c) return [];
  if (c.length === 4) return [c];
  if (c.length === 3) return [`K${c}`];
  return [c];
}

export async function resolveToIcao(rawCode: string): Promise<string | null> {
  const candidates = airportIdCandidates(rawCode);
  for (const id of candidates) {
    const rows = await awcGetJson<AwcAirport[]>("airport", { ids: id });
    const first = rows?.[0];
    if (first?.icaoId) return first.icaoId;
  }
  return null;
}

export async function fetchMetars(icaoIds: string[]): Promise<AwcMetar[]> {
  const ids = [...new Set(icaoIds.filter(Boolean))].join(",");
  if (!ids) return [];
  const rows = await awcGetJson<AwcMetar[]>("metar", { ids });
  return Array.isArray(rows) ? rows : [];
}

export async function fetchPirepsNearAirport(
  icaoId: string,
  distanceNm = 150,
  ageHours = 4,
): Promise<AwcPirep[]> {
  const rows = await awcGetJson<AwcPirep[]>("pirep", {
    id: icaoId,
    distance: distanceNm,
    age: ageHours,
  });
  return Array.isArray(rows) ? rows : [];
}
