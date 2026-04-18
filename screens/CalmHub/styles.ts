import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(_colors: AppColors) {
  return StyleSheet.create({
    main: {
      flexGrow: 1,
      justifyContent: "space-between",
      paddingBottom: 8,
    },
    orbSlot: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 20,
    },
  });
}
