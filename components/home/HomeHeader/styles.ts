import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 4,
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  liveRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  liveLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary,
  },
})
};
