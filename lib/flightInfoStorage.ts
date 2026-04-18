import AsyncStorage from "@react-native-async-storage/async-storage";

import { invalidateTurbulenceBriefingCache } from "@/lib/turbulenceBriefingCache";

const FLIGHT_INFO_KEY = "@flycalm/flight_info_v1";

export type StoredFlightInfo = {
  flightNumber: string;

  departureAirport: string;
  arrivalAirport: string;
  savedAtIso: string;
};

export async function getStoredFlightInfo(): Promise<StoredFlightInfo | null> {
  try {
    const raw = await AsyncStorage.getItem(FLIGHT_INFO_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredFlightInfo;
    if (
      typeof parsed.departureAirport === "string" &&
      typeof parsed.arrivalAirport === "string"
    ) {
      return {
        flightNumber: String(parsed.flightNumber ?? ""),
        departureAirport: parsed.departureAirport,
        arrivalAirport: parsed.arrivalAirport,
        savedAtIso: String(parsed.savedAtIso ?? new Date().toISOString()),
      };
    }
    return null;
  } catch {
    return null;
  }
}

export async function setStoredFlightInfo(
  info: StoredFlightInfo,
): Promise<void> {
  invalidateTurbulenceBriefingCache();
  try {
    await AsyncStorage.setItem(FLIGHT_INFO_KEY, JSON.stringify(info));
  } catch {}
}
