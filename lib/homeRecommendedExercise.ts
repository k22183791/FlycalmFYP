import type { FlightWeatherBriefingState } from "@/hooks/useFlightWeatherBriefing";
import { resolveExercise } from "@/lib/breathingRoutes";

export type HomeRecommendedExerciseNav = {
  symptom?: string;
  phase: string;
};

export type HomeRecommendedExercise = {
  name: string;
  tag: string;
  nav: HomeRecommendedExerciseNav;
};

/**
 * PIREP-heavy → physiological sigh; calmer → coherent breathing.
 * If briefing isn’t ready yet, default to coherent (smooth cruise pattern).
 */
export function getHomeRecommendedExercise(
  state: FlightWeatherBriefingState,
): HomeRecommendedExercise {
  if (state.status === "ready") {
    const level = state.briefing.pirepLevel;
    if (level === "moderate" || level === "severe") {
      const ex = resolveExercise("drops", "turbulence");
      return {
        name: ex.name,
        tag: ex.tag,
        nav: { symptom: "drops", phase: "turbulence" },
      };
    }
    const ex = resolveExercise(undefined, "smooth");
    return {
      name: ex.name,
      tag: ex.tag,
      nav: { phase: "smooth" },
    };
  }

  const ex = resolveExercise(undefined, "smooth");
  return {
    name: ex.name,
    tag: ex.tag,
    nav: { phase: "smooth" },
  };
}
