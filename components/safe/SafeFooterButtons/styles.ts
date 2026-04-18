import type { AppColors } from "@/constants/colors";
import { Platform, StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    wrap: {
      gap: 14,
      marginTop: 20,
      alignItems: "center",
    },
    primary: {
      width: "100%",
      minHeight: 54,
      borderRadius: 14,
      backgroundColor: colors.blue,
      alignItems: "center",
      justifyContent: "center",
      ...Platform.select({
        ios: {
          shadowColor: colors.blueDark,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.22,
          shadowRadius: 14,
        },
        android: {
          elevation: 0,
        },
      }),
    },
    primaryText: {
      fontSize: 16,
      color: colors.white,
    },
    link: {
      fontSize: 15,
      color: colors.blue,
    },
  });
}
