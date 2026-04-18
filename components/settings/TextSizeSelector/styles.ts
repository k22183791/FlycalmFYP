import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.textSettingsTitle,
    marginBottom: 14,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  segment: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.borderSlate,
    backgroundColor: colors.surfaceCard,
    alignItems: "center",
    justifyContent: "center",
  },
  segmentActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  segmentLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textSettingsMuted,
  },
  segmentLabelActive: {
    color: colors.white,
  },
})
};
