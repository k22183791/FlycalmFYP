import { useStyles } from "@/hooks/use-styles";
import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import React from "react";

import { createStyles } from "./styles";

export default function HomeHeader() {
  const styles = useStyles(createStyles);
  return (
    <AppView style={styles.row}>
      <AppText style={styles.brandTitle} weight="bold">
        Flycalm
      </AppText>
      <AppView style={styles.liveRow}>
        <AppView style={styles.liveDot} />
        <AppText style={styles.liveLabel}>Live</AppText>
      </AppView>
    </AppView>
  );
}
