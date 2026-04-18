import type { AppColors } from "@/constants/colors";
import { PRIMARY_BUTTON_HEIGHT } from "@/constants/layout";
import { Platform, StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
  wrap: {
    width: "100%",
    gap: 12,
  },
  primary: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    minHeight: PRIMARY_BUTTON_HEIGHT,
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.28,
        shadowRadius: 16,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  primaryText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  secondary: {
    backgroundColor: colors.surfaceCard,
    borderWidth: 2,
    borderColor: colors.textPrimary,
    borderRadius: 16,
    minHeight: PRIMARY_BUTTON_HEIGHT,
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  secondaryText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  reassuranceLink: {
    paddingVertical: 8,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary,
  },
})
};
