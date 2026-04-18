import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(_colors: AppColors) {
  return StyleSheet.create({
    section: {
      marginTop: 16,
    },
  });
}
