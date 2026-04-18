import { useStyles } from "@/hooks/use-styles";
import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import React from "react";

import { createStyles } from "./styles";

const BULLETS = [
  "The fear shrinks every time you face it. Every flight you get through — even anxiously — weakens it.",
  "Your nose filters cabin air and slows your breath naturally. Mouth breathing accelerates panic.",
  "A longer exhale than your inhale directly signals your nervous system that you are safe.",
];

export default function FacingFearCard() {
  const styles = useStyles(createStyles);
  return (
    <AppView>
      <AppText style={styles.sectionLabel}>Why facing fear works</AppText>
      <AppView style={styles.card}>
        <AppText style={styles.cardTitle} weight="bold">
          The only way out is through
        </AppText>
        {BULLETS.map((text, i) => (
          <AppView key={i} style={styles.bulletRow}>
            <AppView style={styles.bullet}>
              <AppText weight="bold" style={styles.bulletNum}>
                {i + 1}
              </AppText>
            </AppView>
            <AppText style={styles.bulletText}>{text}</AppText>
          </AppView>
        ))}
      </AppView>
    </AppView>
  );
}
