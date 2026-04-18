import type { AppColors } from "@/constants/colors";
import { colors, getPalette } from "@/constants/colors";

/** Static defaults (e.g. Storybook). Prefer `navigationFromPalette` + `useAppColors` in UI. */
export const Colors = {
  light: {
    text: colors.themeLightText,
    background: colors.themeLightBackground,
    primary: colors.primary,
    tint: colors.primary,
    icon: colors.themeLightIcon,
    tabIconDefault: colors.themeLightIcon,
    tabIconSelected: colors.primary,
    black: colors.black,
    blue: colors.overlayTintBlue,
    lightBlue: colors.overlayTintBlueLight,
    black06: colors.scrimLight,
    black04: colors.scrimLighter,
    white: colors.white,
  },
  dark: {
    text: colors.themeDarkText,
    background: colors.themeDarkBackground,
    primary: colors.primary,
    tint: colors.primary,
    icon: colors.themeDarkIcon,
    tabIconDefault: colors.themeDarkIcon,
    tabIconSelected: colors.primary,
    black: colors.white,
    blue: colors.overlayTintBlue,
    lightBlue: colors.overlayTintBlueLight,
    black06: colors.scrimLight,
    black04: colors.scrimLighter,
    white: colors.white,
  },
};

type NavColorKeys = keyof (typeof Colors)["light"];
export type NavigationThemeColors = { [K in NavColorKeys]: string };

export function navigationFromPalette(
  palette: AppColors,
  scheme: "light" | "dark",
): NavigationThemeColors {
  if (scheme === "dark") {
    return {
      text: palette.themeDarkText,
      background: palette.themeDarkBackground,
      primary: palette.primary,
      tint: palette.primary,
      icon: palette.themeDarkIcon,
      tabIconDefault: palette.themeDarkIcon,
      tabIconSelected: palette.primary,
      black: palette.white,
      blue: palette.overlayTintBlue,
      lightBlue: palette.overlayTintBlueLight,
      black06: palette.scrimLight,
      black04: palette.scrimLighter,
      white: palette.white,
    };
  }
  return {
    text: palette.themeLightText,
    background: palette.themeLightBackground,
    primary: palette.primary,
    tint: palette.primary,
    icon: palette.themeLightIcon,
    tabIconDefault: palette.themeLightIcon,
    tabIconSelected: palette.primary,
    black: palette.black,
    blue: palette.overlayTintBlue,
    lightBlue: palette.overlayTintBlueLight,
    black06: palette.scrimLight,
    black04: palette.scrimLighter,
    white: palette.white,
  };
}

export function getStaticNavigationColors(
  scheme: "light" | "dark",
  highContrast = false,
): NavigationThemeColors {
  return navigationFromPalette(getPalette(highContrast), scheme);
}
