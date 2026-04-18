import type { AppColors } from "@/constants/colors";
import { Platform, StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    tagCard: {
      borderRadius: 14,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginBottom: 16,
      backgroundColor: colors.blueTint,
      borderWidth: 1,
      borderColor: colors.borderBlueLight,
    },
    tagEyebrow: {
      fontSize: 11,
      fontWeight: "600",
      letterSpacing: 0.8,
      textTransform: "uppercase",
      color: colors.blue,
      marginBottom: 2,
    },
    tagName: {
      fontSize: 15,
      fontWeight: "600",
      color: colors.blueDark,
    },
    legendRow: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 16,
      marginBottom: 20,
      flexWrap: "wrap",
    },
    legendItem: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    legendDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    legendLabel: {
      fontSize: 11,
      color: colors.textMuted,
    },
    bigWordWrap: {
      alignItems: "center",
      minHeight: 100,
      justifyContent: "center",
      marginBottom: 8,
    },
    bigWord: {
      fontSize: 40,
      fontWeight: "700",
      color: colors.textPrimary,
      textAlign: "center",
      lineHeight: 48,
    },
    subWord: {
      fontSize: 14,
      marginTop: 4,
      color: colors.textSecondary,
      textAlign: "center",
      lineHeight: 21,
    },
    ringWrap: {
      alignSelf: "center",
      width: 60,
      height: 60,
      marginBottom: 20,
    },
    ringSvg: {
      transform: [{ rotate: "-90deg" }],
    },
    countdownWrap: {
      ...StyleSheet.absoluteFillObject,
      alignItems: "center",
      justifyContent: "center",
    },
    countdownText: {
      fontSize: 19,
      fontWeight: "600",
      color: colors.textPrimary,
    },
    barOuter: {
      height: 32,
      borderRadius: 16,
      backgroundColor: colors.skyLight,
      borderWidth: 0.5,
      borderColor: colors.skyBorder,
      overflow: "hidden",
      marginBottom: 8,
    },
    barInner: {
      height: "100%",
      borderRadius: 16,
    },
    cuePillWrap: {
      height: 28,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12,
    },
    cuePill: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 14,
      backgroundColor: colors.warmAccentBg,
      borderWidth: 1,
      borderColor: colors.warmAccent,
    },
    cuePillText: {
      fontSize: 12,
      fontWeight: "500",
      color: colors.warmAccentText,
      lineHeight: 18,
    },
    dotsRow: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 8,
      marginBottom: 20,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    controls: {
      paddingHorizontal: 24,
    },
    controlRow: {
      flexDirection: "row",
      gap: 12,
    },
    startBtn: {
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
        android: { elevation: 4 },
      }),
    },
    startBtnText: {
      fontSize: 16,
      color: colors.white,
    },
    pauseBtn: {
      flex: 1,
      minHeight: 54,
      borderRadius: 14,
      backgroundColor: colors.blue,
      alignItems: "center",
      justifyContent: "center",
    },
    pauseBtnText: {
      fontSize: 15,
      color: colors.white,
    },
    endBtn: {
      flex: 1,
      minHeight: 54,
      borderRadius: 14,
      borderWidth: 1.5,
      borderColor: colors.primaryBorderMuted,
      backgroundColor: colors.successMutedBg,
      alignItems: "center",
      justifyContent: "center",
    },
    endBtnText: {
      fontSize: 15,
      fontWeight: "700",
      color: colors.safeHeroIcon,
    },
  });
}
