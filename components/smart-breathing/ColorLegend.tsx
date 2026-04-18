import { useStyles } from "@/hooks/use-styles";
import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import { colors } from "@/constants/colors";
import React from "react";

import { BREATHING_COL_WARN, BREATHING_EXHALE_LEGEND } from "./constants";
import { createStyles } from "./styles";

const ITEMS = [
  { col: colors.blue, label: "inhale / hold" },
  { col: BREATHING_EXHALE_LEGEND, label: "exhale" },
  { col: BREATHING_COL_WARN, label: "next coming" },
] as const;

export default function ColorLegend() {
  const styles = useStyles(createStyles);
  return (
    <AppView style={styles.legendRow}>
      {ITEMS.map(({ col, label }) => (
        <AppView key={label} style={styles.legendItem}>
          <AppView style={[styles.legendDot, { backgroundColor: col }]} />
          <AppText style={styles.legendLabel}>{label}</AppText>
        </AppView>
      ))}
    </AppView>
  );
}
