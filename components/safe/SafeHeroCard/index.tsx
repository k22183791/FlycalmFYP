import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import { useStyles } from "@/hooks/use-styles";
import { useAppColors } from "@/hooks/useAppColors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import { createStyles } from "./styles";

type Props = {
  /** Reassurance copy from the matched exercise (`ex.safe`). */
  message: string;
};

export default function SafeHeroCard({ message }: Props) {
  const palette = useAppColors();
  const styles = useStyles(createStyles);

  return (
    <AppView style={styles.card}>
      <AppView style={styles.iconCircle}>
        <Ionicons name="checkmark" size={28} color={palette.safeHeroIcon} />
      </AppView>

      <AppText style={styles.title} weight="bold">
        You&apos;re safe
      </AppText>

      <AppText style={styles.body}>{message}</AppText>
    </AppView>
  );
}
