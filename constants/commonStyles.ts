import { spacing } from "@/utils/responsive";
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  flex: { flex: 1 },
  flex0: { flex: 0 },
  row: { flexDirection: "row", alignItems: "center" },
  rowStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rowEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowAround: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  rowEvenly: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rowWrap: { flexDirection: "row", flexWrap: "wrap" },

  column: { flexDirection: "column" },
  columnStart: { flexDirection: "column", justifyContent: "flex-start" },
  columnCenter: { flexDirection: "column", justifyContent: "center" },
  columnEnd: { flexDirection: "column", justifyContent: "flex-end" },
  columnBetween: { flexDirection: "column", justifyContent: "space-between" },
  columnAround: { flexDirection: "column", justifyContent: "space-around" },
  columnEvenly: { flexDirection: "column", justifyContent: "space-evenly" },
  columnWrap: { flexDirection: "column", flexWrap: "wrap" },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  alignStart: { alignItems: "flex-start" },
  alignCenter: { alignItems: "center" },
  alignEnd: { alignItems: "flex-end" },
  alignStretch: { alignItems: "stretch" },

  justifyStart: { justifyContent: "flex-start" },
  justifyCenter: { justifyContent: "center" },
  justifyEnd: { justifyContent: "flex-end" },
  justifyBetween: { justifyContent: "space-between" },
  justifyAround: { justifyContent: "space-around" },
  justifyEvenly: { justifyContent: "space-evenly" },

  mbXs: { marginBottom: spacing.xs },
  mbSm: { marginBottom: spacing.sm },
  mbMd: { marginBottom: spacing.md },
  mbLg: { marginBottom: spacing.lg },
  mtXs: { marginTop: spacing.xs },
  mtSm: { marginTop: spacing.sm },
  mtMd: { marginTop: spacing.md },
  mtLg: { marginTop: spacing.lg },

  pXs: { padding: spacing.xs },
  pSm: { padding: spacing.sm },
  pMd: { padding: spacing.md },
  pLg: { padding: spacing.lg },
});
