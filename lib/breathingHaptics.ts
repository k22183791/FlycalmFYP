import * as Haptics from "expo-haptics";

/**
 * Consistent tactile vocabulary across all breathing exercises:
 * - light → start of inhale (including first beat of a double inhale)
 * - heavy → start of breath hold (or second “sip” on physiological sigh)
 * - medium → start of exhale
 */
export type BreathingHapticWeight = "light" | "medium" | "heavy";

const IMPACT: Record<BreathingHapticWeight, Haptics.ImpactFeedbackStyle> = {
  light: Haptics.ImpactFeedbackStyle.Light,
  medium: Haptics.ImpactFeedbackStyle.Medium,
  heavy: Haptics.ImpactFeedbackStyle.Heavy,
};

export function triggerBreathingHaptic(weight: BreathingHapticWeight): void {
  void Haptics.impactAsync(IMPACT[weight]);
}

/**
 * Distinct from phase cues (light / heavy / medium): use when the full exercise
 * finishes all rounds — notification-style, not impact.
 */
export function triggerExerciseCompleteHaptic(): void {
  void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
}
