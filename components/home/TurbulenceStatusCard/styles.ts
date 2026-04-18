import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    cardTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.textPrimary,
    },
    cardSubtitle: {
      fontSize: 14,
      marginTop: 4,
      color: colors.textSecondary,
    },
    loadingRow: {
      marginTop: 18,
      minHeight: 10,
      justifyContent: "center",
    },
    statsBlock: {
      marginTop: 16,
      padding: 14,
      borderRadius: 14,
      backgroundColor: colors.surfaceSlate,
      borderWidth: 1,
      borderColor: colors.borderSubtle,
      gap: 12,
    },
    statsLevelPill: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 999,
    },
    statsLevelText: {
      fontSize: 15,
      fontWeight: "800",
    },
    bumpsParagraph: {
      fontSize: 15,
      lineHeight: 22,
      color: colors.textPrimary,
    },
    comfortParagraph: {
      fontSize: 14,
      lineHeight: 21,
      color: colors.textSecondary,
    },
    timelineLine: {
      fontSize: 13,
      lineHeight: 20,
      marginTop: 12,
      color: colors.textSecondary,
    },
    addFlightLink: {
      marginTop: 14,
      fontSize: 15,
      fontWeight: "700",
      color: colors.primary,
    },
  });
}
