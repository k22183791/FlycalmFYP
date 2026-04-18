import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600",
    color: colors.textMuted,
  },
  headerSpacer: {
    width: 22,
  },
  reassurance: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.textSecondary,
    marginTop: 4,
  },
  mainBlock: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 24,
    gap: 4,
  },
  cueBlock: {
    alignItems: "center",
    marginBottom: 8,
  },
  bigLabel: {
    fontSize: 40,
    lineHeight: 44,
    color: colors.textPrimary,
    textAlign: "center",
    minHeight: 48,
  },
  bigSub: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 6,
    minHeight: 22,
    paddingHorizontal: 8,
  },
  barWrap: {
    width: "100%",
    marginTop: 16,
  },
  barOuter: {
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.skyLight,
    borderWidth: 0.5,
    borderColor: colors.skyBorder,
    overflow: "hidden",
  },
  barInner: {
    height: "100%",
    borderRadius: 16,
  },
  cueLine: {
    minHeight: 20,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cueSmall: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textMuted,
    letterSpacing: 0.3,
  },
  cueTransition: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.warmAccent,
  },
  legendRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
    marginTop: 14,
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
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginTop: 18,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  doneText: {
    fontSize: 17,
    textAlign: "center",
    color: colors.blue,
    marginTop: 16,
  },
  footer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  startBtn: {
    width: "100%",
    minHeight: 64,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
  },
  startBtnText: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.white,
  },
  pauseBtn: {
    width: "100%",
    minHeight: 64,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.textPrimary,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  pauseBtnText: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  linkRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  link: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.primary,
  },
})
};
