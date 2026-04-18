import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
  pressable: {
    paddingVertical: 4,
  },
  label: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.danger,
  },
})
};
