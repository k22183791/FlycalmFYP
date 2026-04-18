import {
  getStoredFlightInfo,
  type StoredFlightInfo,
} from "@/lib/flightInfoStorage";
import type { FlightWeatherBriefing } from "@/lib/flightWeatherBriefing";
import { buildFlightWeatherBriefing } from "@/lib/flightWeatherBriefing";
import {
  getCachedTurbulenceBriefing,
  getPersistedTurbulenceBriefing,
  saveTurbulenceBriefingForTrip,
  setCachedTurbulenceBriefing,
} from "@/lib/turbulenceBriefingCache";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

export type FlightWeatherBriefingState =
  | { status: "idle" }
  | { status: "empty" }
  | { status: "incomplete"; stored: StoredFlightInfo }
  | { status: "loading" }
  | {
      status: "ready";
      briefing: FlightWeatherBriefing;
      stored: StoredFlightInfo;
    }
  | { status: "error"; message: string; stored?: StoredFlightInfo };

export function useFlightWeatherBriefing() {
  const [state, setState] = useState<FlightWeatherBriefingState>({
    status: "idle",
  });

  const load = useCallback(async (options?: { force?: boolean }) => {
    const stored = await getStoredFlightInfo();
    if (!stored) {
      setState({ status: "empty" });
      return;
    }
    const needsAirports =
      !stored.departureAirport.trim() || !stored.arrivalAirport.trim();
    if (needsAirports) {
      setState({ status: "incomplete", stored });
      return;
    }

    if (!options?.force) {
      const memoryBriefing = getCachedTurbulenceBriefing(stored);
      if (memoryBriefing) {
        setState({
          status: "ready",
          briefing: memoryBriefing,
          stored,
        });
        return;
      }
      const diskBriefing = await getPersistedTurbulenceBriefing(stored);
      if (diskBriefing) {
        setCachedTurbulenceBriefing(stored, diskBriefing);
        setState({
          status: "ready",
          briefing: diskBriefing,
          stored,
        });
        return;
      }
    }

    setState({ status: "loading" });
    try {
      const briefing = await buildFlightWeatherBriefing(stored);
      await saveTurbulenceBriefingForTrip(stored, briefing);
      setState({ status: "ready", briefing, stored });
    } catch (e) {
      const message =
        e instanceof Error
          ? e.message
          : "Could not load turbulence reports right now.";
      setState({ status: "error", message, stored });
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
    }, [load]),
  );

  const refresh = useCallback(() => load({ force: true }), [load]);

  return { state, refresh };
}
