import type { AppColors } from "@/constants/colors";
import { Platform, StyleSheet } from "react-native";

export const OUTER_MIN = 196;
export const OUTER_MAX = 256;
export const INNER_SIZE = 52;

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    column: {
      alignItems: "center",
    },
    orbSlotFixed: {
      width: OUTER_MAX,
      height: OUTER_MAX,
      alignItems: "center",
      justifyContent: "center",
    },
    outerBase: {
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
      overflow: "visible",
      ...Platform.select({
        ios: {
          shadowColor: colors.orbAccent,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.55,
          shadowRadius: 28,
        },
        android: {
          elevation: 8,
        },
      }),
    },
    innerCircle: {
      width: INNER_SIZE,
      height: INNER_SIZE,
      borderRadius: INNER_SIZE / 2,
      backgroundColor: colors.whiteTranslucent,
    },
    cueWrap: {
      marginTop: 20,
      minHeight: 26,
      width: "100%",
      maxWidth: 280,
      justifyContent: "center",
      alignItems: "center",
    },
    cue: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "500",
      color: colors.textSecondary,
      textAlign: "center",
      ...Platform.select({
        android: { includeFontPadding: false },
      }),
    },
  });
}
