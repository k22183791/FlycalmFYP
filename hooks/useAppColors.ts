import { getPalette } from "@/constants/colors";
import { useAccessibilityPreferences } from "@/contexts/AccessibilityPreferencesContext";

export function useAppColors() {
  const { highContrast } = useAccessibilityPreferences();
  return getPalette(highContrast);
}
