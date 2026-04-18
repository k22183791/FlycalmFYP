import type { NavigationThemeColors } from "@/constants/theme";
import { navigationFromPalette } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useAppColors } from "@/hooks/useAppColors";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof NavigationThemeColors,
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];
  const palette = useAppColors();

  if (colorFromProps) {
    return colorFromProps;
  }

  const table = navigationFromPalette(
    palette,
    theme === "dark" ? "dark" : "light",
  );
  return table[colorName];
}
