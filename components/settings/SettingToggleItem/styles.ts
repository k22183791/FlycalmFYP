import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  textBlock: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.textSettingsTitle,
  },
  description: {
    fontSize: 14,
    marginTop: 6,
    lineHeight: 20,
    color: colors.textSettingsMuted,
  },
})
};
