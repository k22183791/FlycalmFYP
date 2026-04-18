import { useStyles } from "@/hooks/use-styles";
import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import React from "react";

import { createStyles } from "./styles";

export default function HomeHeroSection() {
  const styles = useStyles(createStyles);
  return (
    <AppView>
      <AppView style={styles.statusRow}>
        <AppView style={styles.statusDot} />
        <AppText style={styles.statusLabel}>In flight</AppText>
      </AppView>

      <AppText style={styles.brandTitle} weight="bold">
        Flycalm
      </AppText>
      <AppText style={styles.heroSubtitle}>
        You are safe. Your body is responding — not the aircraft.
      </AppText>
    </AppView>
  );
}
