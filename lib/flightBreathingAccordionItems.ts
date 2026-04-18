import { FALLBACK, ROUTE } from "@/lib/breathingRoutes";

export type FlightBreathingAccordionItem = {
  id: string;
  title: string;
  subtitle: string;
  symptom?: string;
  phase: string;
};

const ROUTE_PAIRS: [string, string][] = [
  ["heart", "gate"],
  ["shaky", "takeoff"],
  ["heart", "smooth"],
  ["drops", "turbulence"],
  ["tense", "landing"],
  ["heart", "landed"],
];

const FALLBACK_PHASES = [
  "gate",
  "smooth",
  "turbulence",
  "landing",
  "landed",
] as const;

export function getFlightBreathingAccordionItems(): FlightBreathingAccordionItem[] {
  const routeItems: FlightBreathingAccordionItem[] = ROUTE_PAIRS.map(
    ([symptom, phase]) => {
      const ex = ROUTE[`${symptom}:${phase}`];
      return {
        id: `route-${symptom}-${phase}`,
        title: ex.name,
        subtitle: `${ex.tag} · ${ex.rounds} rounds`,
        symptom,
        phase,
      };
    },
  );

  const fallbackItems: FlightBreathingAccordionItem[] = FALLBACK_PHASES.map(
    (phase) => {
      const ex = FALLBACK[phase];
      return {
        id: `fallback-${phase}`,
        title: ex.name,
        subtitle: `${ex.tag} · ${ex.rounds} rounds`,
        phase,
      };
    },
  );

  return [...routeItems, ...fallbackItems];
}
