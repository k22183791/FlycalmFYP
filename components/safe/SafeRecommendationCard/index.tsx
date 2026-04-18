import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import { useStyles } from "@/hooks/use-styles";
import React from "react";

import { createStyles } from "./styles";

type Props = {
  tag: string;
  exerciseName: string;
  why: string;
};

export default function SafeRecommendationCard({
  tag,
  exerciseName,
  why,
}: Props) {
  const styles = useStyles(createStyles);

  return (
    <AppView style={styles.card}>
      <AppText style={styles.eyebrow}>{tag}</AppText>
      <AppText style={styles.title} weight="bold">
        {exerciseName}
      </AppText>
      <AppText style={styles.body}>{why}</AppText>
    </AppView>
  );
}
