import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
  grid: {
    flexDirection: "row",
    gap: 10,
  },
  card: {
    flex: 1,
    borderRadius: 14,
    padding: 14,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderSubtle,
  },
  icon: {
    marginBottom: 8,
  },
  faithLabel: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: colors.primary,
    marginBottom: 6,
  },
  quote: {
    fontSize: 12,
    color: colors.textPrimary,
    lineHeight: 18,
    marginBottom: 6,
  },
  source: {
    fontSize: 11,
    color: colors.textMuted,
  },
})
};
