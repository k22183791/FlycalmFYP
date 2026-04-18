import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
  statusRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  statusLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.primary,
  },
  brandTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  heroSubtitle: {
    fontSize: 14,
    marginTop: 4,
    color: colors.textSecondary,
    lineHeight: 21,
  },
})
};
