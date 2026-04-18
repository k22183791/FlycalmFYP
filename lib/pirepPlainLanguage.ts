import type { PirepTurbulenceLevel } from "@/lib/flightWeatherBriefing";

/** All user-visible turbulence text — no codes, times, distances, or raw reports. */
export type TurbulenceUiCopy = {
  /** Short label for the colored badge. */
  pillLabel: string;
  /** What “bumps” mean in everyday language. */
  bumpsDescription: string;
  /** Seat belt / crew / reassurance — relatable, not technical. */
  comfortNote: string;
};

export function turbulenceUiCopy(
  level: PirepTurbulenceLevel,
): TurbulenceUiCopy {
  switch (level) {
    case "none":
      return {
        pillLabel: "Looks calm",
        bumpsDescription:
          "Right now nothing in our summary points to rough air near the trip you entered. You will still feel normal flying motion, climbs, and turns.",
        comfortNote:
          "Follow your crew for the seat belt sign. This is only a soft hint about nearby conditions — not a promise about your exact flight.",
      };
    case "light":
      return {
        pillLabel: "Light bumps",
        bumpsDescription:
          "Our summary suggests mostly light chop — small jolts, a bit like rolling over gentle bumps in a car.",
        comfortNote:
          "The seat belt sign might flicker on. Staying buckled when you are seated is always a good idea.",
      };
    case "moderate":
      return {
        pillLabel: "Moderate bumps",
        bumpsDescription:
          "Our summary suggests moderate motion — firmer jolts than light chop. Aircraft are built and flown for this every day.",
        comfortNote:
          "The seat belt sign is more likely to stay on. Keep your belt fastened when seated and move about only when the crew says it is safe.",
      };
    case "severe":
      return {
        pillLabel: "Strong bumps (rare)",
        bumpsDescription:
          "Our summary flags stronger motion than usual. That is uncommon here; crews train to avoid and manage rough patches.",
        comfortNote:
          "If the ride feels intense, stay seated with your belt on and follow crew instructions right away.",
      };
  }
}
