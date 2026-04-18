import AsyncStorage from "@react-native-async-storage/async-storage";

import type { StoredFlightInfo } from "@/lib/flightInfoStorage";
import type { FlightWeatherBriefing } from "@/lib/flightWeatherBriefing";

type CacheEntry = {
  key: string;
  briefing: FlightWeatherBriefing;
};

let memoryEntry: CacheEntry | null = null;

const PERSIST_KEY = "@flycalm/turbulence_briefing_v2";

/** Bump when briefing shape or logic changes so stale entries are ignored. */
const CACHE_KEY_SUFFIX = "briefing-v5";

type PersistedPayload = {
  tripKey: string;
  briefing: FlightWeatherBriefing;
};

export function turbulenceCacheKey(stored: StoredFlightInfo): string {
  return `${stored.departureAirport.trim().toUpperCase()}|${stored.arrivalAirport.trim().toUpperCase()}|${CACHE_KEY_SUFFIX}`;
}

export function getCachedTurbulenceBriefing(
  stored: StoredFlightInfo,
): FlightWeatherBriefing | null {
  if (!memoryEntry) return null;
  const key = turbulenceCacheKey(stored);
  if (memoryEntry.key !== key) return null;
  return memoryEntry.briefing;
}

export function setCachedTurbulenceBriefing(
  stored: StoredFlightInfo,
  briefing: FlightWeatherBriefing,
): void {
  memoryEntry = {
    key: turbulenceCacheKey(stored),
    briefing,
  };
}

export async function getPersistedTurbulenceBriefing(
  stored: StoredFlightInfo,
): Promise<FlightWeatherBriefing | null> {
  try {
    const raw = await AsyncStorage.getItem(PERSIST_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedPayload;
    if (
      typeof parsed.tripKey !== "string" ||
      parsed.tripKey !== turbulenceCacheKey(stored) ||
      !parsed.briefing ||
      typeof parsed.briefing.pirepLevel !== "string"
    ) {
      return null;
    }
    return parsed.briefing;
  } catch {
    return null;
  }
}

export async function setPersistedTurbulenceBriefing(
  stored: StoredFlightInfo,
  briefing: FlightWeatherBriefing,
): Promise<void> {
  try {
    const payload: PersistedPayload = {
      tripKey: turbulenceCacheKey(stored),
      briefing,
    };
    await AsyncStorage.setItem(PERSIST_KEY, JSON.stringify(payload));
  } catch {
    /* ignore */
  }
}

/** Saves to memory and disk so the next cold start can skip the API for this trip. */
export async function saveTurbulenceBriefingForTrip(
  stored: StoredFlightInfo,
  briefing: FlightWeatherBriefing,
): Promise<void> {
  setCachedTurbulenceBriefing(stored, briefing);
  await setPersistedTurbulenceBriefing(stored, briefing);
}

export function invalidateTurbulenceBriefingCache(): void {
  memoryEntry = null;
  void AsyncStorage.removeItem(PERSIST_KEY).catch(() => {});
}
