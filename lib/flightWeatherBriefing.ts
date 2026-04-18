import type { AwcPirep } from "@/lib/aviationWeatherGov";
import {
  fetchPirepsNearAirport,
  resolveToIcao,
} from "@/lib/aviationWeatherGov";
import type { StoredFlightInfo } from "@/lib/flightInfoStorage";

export type PirepTurbulenceLevel = "none" | "light" | "moderate" | "severe";

export type FlightWeatherBriefing = {
  pirepLevel: PirepTurbulenceLevel;
};

const PIREP_RANK: Record<string, number> = {
  "": 0,
  LGT: 1,
  LIGHT: 1,
  MOD: 2,
  MODERATE: 2,
  SEV: 3,
  SEVERE: 3,
};

function rankFromTb(raw: string | undefined): number {
  if (!raw) return 0;
  const k = raw.trim().toUpperCase();
  return PIREP_RANK[k] ?? 0;
}

function rankFromRawPirepText(raw: string | undefined): number {
  if (!raw) return 0;
  const u = raw.toUpperCase();
  if (/\bTB\s+SEV\b|\/TB\s+SEV\b|\bTURB\s+SEV\b/.test(u)) return 3;
  if (/\bTB\s+MOD\b|\/TB\s+MOD\b|\bMOD\s+CAT\b|\bCAT\s+MOD\b/.test(u)) return 2;
  if (/\bTB\s+LGT\b|\/TB\s+LGT\b/.test(u)) return 1;
  return 0;
}

function reportTurbulenceRank(r: AwcPirep): number {
  return Math.max(
    rankFromTb(r.tbInt1),
    rankFromTb(r.tbInt2),
    rankFromRawPirepText(r.rawOb),
  );
}

function maxPirepLevel(reports: AwcPirep[]): PirepTurbulenceLevel {
  let max = 0;
  for (const r of reports) {
    max = Math.max(max, reportTurbulenceRank(r));
  }
  if (max >= 3) return "severe";
  if (max >= 2) return "moderate";
  if (max >= 1) return "light";
  return "none";
}

export async function buildFlightWeatherBriefing(
  stored: StoredFlightInfo,
): Promise<FlightWeatherBriefing> {
  const [depIcao, arrIcao] = await Promise.all([
    resolveToIcao(stored.departureAirport),
    resolveToIcao(stored.arrivalAirport),
  ]);

  if (!depIcao || !arrIcao) {
    throw new Error(
      "We could not match those airports. Try the three-letter names you see on your ticket, or check spelling.",
    );
  }

  const [pirepDep, pirepArr] = await Promise.all([
    fetchPirepsNearAirport(depIcao),
    fetchPirepsNearAirport(arrIcao),
  ]);

  const pirepAll = [...pirepDep, ...pirepArr];
  const pirepLevel = maxPirepLevel(pirepAll);

  return { pirepLevel };
}
