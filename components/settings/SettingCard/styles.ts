import type { AppColors } from "@/constants/colors";
import { Platform, StyleSheet } from "react-native";

export const CARD_RADIUS = 22;

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    card: {
      backgroundColor: colors.surfaceCard,
      borderRadius: CARD_RADIUS,
      borderWidth: 1,
      borderColor: colors.borderDefault,
      paddingHorizontal: 20,
      paddingVertical: 18,
      marginBottom: 16,
      ...Platform.select({
        ios: {
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.06,
          shadowRadius: 14,
        },
        android: {
          elevation: 0,
        },
      }),
    },
  });
}
