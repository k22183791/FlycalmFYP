/**
 * App color palette. Prefer `colors.primary`-style access everywhere.
 */
export const colors = {
  primary: "#2DD4BF",
  blue: "#185FA5",
  blueDark: "#0C447C",
  blueExhale: "#85B7EB",
  blueMid: "#378ADD",
  tabInactive: "#94A3B8",

  textPrimary: "#1a1a2e",
  textSecondary: "#6b7280",
  textMuted: "#9ca3af",
  textBody: "#4b5563",
  textHeading: "#111827",
  textGray800: "#1f2937",
  textGray700: "#374151",
  textSettingsTitle: "#1a202c",
  textSettingsMuted: "#718096",

  white: "#ffffff",
  black: "#000000",

  borderDefault: "#f1f5f9",
  borderSubtle: "#e5e7eb",
  borderInput: "#d1d5db",
  borderSlate: "#E2E8F0",
  borderPanel: "#e8eef4",
  borderBlueLight: "#B5D4F4",

  surfaceCard: "#ffffff",
  surfaceMuted: "#e2e8f0",
  surfaceSlate: "#f8fafc",
  surfaceSettings: "#F0F4F8",
  surfaceTealWash: "#f0fdfa",

  blueTint: "#E6F1FB",
  blueSoft: "#e8f0fa",
  skyLight: "#e0f2fe",
  skyBorder: "#cbd5e1",

  success: "#22c55e",
  /** Checkmark / hero accent on safe screen */
  safeHeroIcon: "#2e7d32",
  successMutedBg: "#dcfce7",
  danger: "#e85d4c",

  overlayDark: "rgba(0,0,0,0.45)",
  whiteTranslucent: "rgba(255, 255, 255, 0.38)",
  primaryBorderMuted: "rgba(45,212,191,0.3)",
  primaryBorderSoft: "rgba(45,212,191,0.35)",
  blueBorderFaint: "rgba(24,95,165,0.2)",
  blueBorderMuted: "rgba(24, 95, 165, 0.28)",

  shadow: "#000000",
  orbAccent: "#7dd3fc",

  turbulenceLow: "#14532d",
  turbulenceMed: "#854d0e",
  turbulenceHigh: "#9a3412",
  timelineCalm: "#86efac",
  timelineWarn: "#fde68a",
  timelineAlert: "#fdba74",

  warmAccent: "#EF9F27",
  warmAccentBg: "#FAEEDA",
  warmAccentText: "#854F0B",

  linkDeepBlue: "#0053A5",

  calmHintBg: "#e8f5e9",
  symptomIndigoWash: "#e0e7ff",
  symptomAmberWash: "#fef3c7",
  symptomRoseWash: "#fce7f3",

  phaseGateBg: "#e8f5e9",
  phaseTakeoffBg: "#e3f2fd",
  phaseSmoothBg: "#eeeeee",
  phaseTurbulenceBg: "#fff3e0",
  phaseLandingBg: "#fce4ec",

  overlayTintBlue: "#3DADFF33",
  overlayTintBlueLight: "#3DADFF1F",
  scrimLight: "#0000000F",
  scrimLighter: "#1E1E1E0A",

  /** Expo Router / React Navigation template theme */
  themeLightText: "#11181C",
  themeLightBackground: "#F3F4F5",
  themeLightIcon: "#687076",
  themeDarkText: "#ECEDEE",
  themeDarkBackground: "#151718",
  themeDarkIcon: "#9BA1A6",

  inputBackgroundTranslucent: "#FFFFFFE5",
  inputBorderWarm: "#D9A06C",
  inputPlaceholder: "#8F8F8F",
} as const;

export type AppColors = { [K in keyof typeof colors]: string };

/**
 * Stronger contrast for text, borders, and chrome (WCAG-oriented).
 * Surfaces stay light; text and dividers move toward black.
 */
export const colorsHighContrast = {
  ...colors,
  primary: "#004d47",
  blue: "#001f4d",
  blueDark: "#001428",
  blueExhale: "#1e4ed8",
  blueMid: "#004080",
  tabInactive: "#404040",

  textPrimary: "#000000",
  textSecondary: "#000000",
  textMuted: "#242424",
  textBody: "#000000",
  textHeading: "#000000",
  textGray800: "#000000",
  textGray700: "#000000",
  textSettingsTitle: "#000000",
  textSettingsMuted: "#1a1a1a",

  borderDefault: "#000000",
  borderSubtle: "#000000",
  borderInput: "#000000",
  borderSlate: "#000000",
  borderPanel: "#000000",
  borderBlueLight: "#000000",

  surfaceMuted: "#d4d4d4",
  surfaceSlate: "#ffffff",
  surfaceSettings: "#ffffff",
  surfaceTealWash: "#ffffff",

  blueTint: "#e8e8e8",
  blueSoft: "#e8e8e8",
  skyLight: "#ffffff",
  skyBorder: "#000000",

  success: "#0d5c0d",
  safeHeroIcon: "#0d4d0d",
  successMutedBg: "#d8f5d8",

  overlayDark: "rgba(0,0,0,0.75)",
  whiteTranslucent: "rgba(255, 255, 255, 0.55)",
  primaryBorderMuted: "#000000",
  primaryBorderSoft: "#000000",
  blueBorderFaint: "#000000",
  blueBorderMuted: "#000000",

  orbAccent: "#005a8c",

  turbulenceLow: "#2d7a2d",
  turbulenceMed: "#a67c00",
  turbulenceHigh: "#b45309",
  timelineCalm: "#2d7a2d",
  timelineWarn: "#a67c00",
  timelineAlert: "#b45309",

  warmAccent: "#a65d00",
  warmAccentBg: "#fff3d6",
  warmAccentText: "#3d2800",

  linkDeepBlue: "#000080",

  calmHintBg: "#e0f0e0",

  themeLightText: "#000000",
  themeLightBackground: "#ffffff",
  themeLightIcon: "#000000",
  themeDarkText: "#ffffff",
  themeDarkBackground: "#000000",
  themeDarkIcon: "#ffffff",

  overlayTintBlue: "#00336655",
  overlayTintBlueLight: "#00336633",

  inputPlaceholder: "#3d3d3d",
} satisfies AppColors;

export function getPalette(highContrast: boolean): AppColors {
  return highContrast ? colorsHighContrast : colors;
}
