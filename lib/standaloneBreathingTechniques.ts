import type { BreathingHapticWeight } from "@/lib/breathingHaptics";

export type PhaseType = "inhale" | "hold" | "exhale";

export type StandalonePhase = {
  label: string;
  sub: string;
  duration: number;
  type: PhaseType;
  haptic: BreathingHapticWeight;
};

export type StandaloneTechnique = {
  name: string;
  reassurance: string;
  phases: StandalonePhase[];
};

export const STANDALONE_TECHNIQUES: Record<string, StandaloneTechnique> = {
  "physiological-sigh": {
    name: "Physiological Sigh",
    reassurance: "Your body is reacting to movement. This will rise and fall.",
    phases: [
      {
        label: "Breathe in",
        sub: "Deep through your nose — about 3 seconds",
        duration: 3000,
        type: "inhale",
        haptic: "light",
      },
      {
        label: "Sip more in",
        sub: "Quick second top-up",
        duration: 1000,
        type: "inhale",
        haptic: "heavy",
      },
      {
        label: "Breathe out",
        sub: "Long slow sigh through your mouth — about 6 seconds",
        duration: 6000,
        type: "exhale",
        haptic: "medium",
      },
    ],
  },
  "4-7-8": {
    name: "4-7-8 Breathing",
    reassurance: "A long exhale tells your nervous system the danger is over.",
    phases: [
      {
        label: "Breathe in",
        sub: "Through your nose for 4",
        duration: 4000,
        type: "inhale",
        haptic: "light",
      },
      {
        label: "Hold",
        sub: "Keep it for 7",
        duration: 7000,
        type: "hold",
        haptic: "heavy",
      },
      {
        label: "Breathe out",
        sub: "Slow whoosh for 8",
        duration: 8000,
        type: "exhale",
        haptic: "medium",
      },
    ],
  },
  "4-2-6": {
    name: "4-2-6 Breathing",
    reassurance:
      "A longer exhale than your inhale lowers your heart rate directly.",
    phases: [
      {
        label: "Breathe in",
        sub: "Inhale for 4",
        duration: 4000,
        type: "inhale",
        haptic: "light",
      },
      {
        label: "Hold",
        sub: "Pause for 2",
        duration: 2000,
        type: "hold",
        haptic: "heavy",
      },
      {
        label: "Breathe out",
        sub: "Exhale slowly for 6",
        duration: 6000,
        type: "exhale",
        haptic: "medium",
      },
    ],
  },
  belly: {
    name: "Deep Belly Breath",
    reassurance: "Breathing into your stomach tells your body you are safe.",
    phases: [
      {
        label: "Breathe in",
        sub: "Deep into your belly — about 5 seconds",
        duration: 5000,
        type: "inhale",
        haptic: "light",
      },
      {
        label: "Breathe out",
        sub: "Soft and slow — about 5 seconds",
        duration: 5000,
        type: "exhale",
        haptic: "medium",
      },
    ],
  },
  coherent: {
    name: "Coherent (Resonant) Breathing",
    reassurance: "Even inhale and exhale steady your heart and mind.",
    phases: [
      {
        label: "Breathe in",
        sub: "Gentle wave — 5.5 seconds",
        duration: 5500,
        type: "inhale",
        haptic: "light",
      },
      {
        label: "Breathe out",
        sub: "Same pace out — 5.5 seconds",
        duration: 5500,
        type: "exhale",
        haptic: "medium",
      },
    ],
  },
};

export const DEFAULT_TECHNIQUE_ID = "physiological-sigh";

export function getStandaloneTechnique(
  techniqueId?: string,
): StandaloneTechnique {
  const id =
    techniqueId && STANDALONE_TECHNIQUES[techniqueId]
      ? techniqueId
      : DEFAULT_TECHNIQUE_ID;
  return STANDALONE_TECHNIQUES[id];
}
