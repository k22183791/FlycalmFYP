import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import { useStyles } from "@/hooks/use-styles";
import type { FlightWeatherBriefingState } from "@/hooks/useFlightWeatherBriefing";
import { getHomeRecommendedExercise } from "@/lib/homeRecommendedExercise";
import { router } from "expo-router";
import React, { useMemo } from "react";
import { Pressable } from "react-native";

import { createHomeSurfaceCard } from "../surfaceStyles";
import { createStyles } from "./styles";

export type RecommendationCardProps = {
  briefingState: FlightWeatherBriefingState;
};

export default function RecommendationCard({
  briefingState,
}: RecommendationCardProps) {
  const surface = useStyles(createHomeSurfaceCard);
  const styles = useStyles(createStyles);
  const rec = useMemo(
    () => getHomeRecommendedExercise(briefingState),
    [briefingState],
  );

  const openExercise = () => {
    const { nav } = rec;
    router.push({
      pathname: "/smart-breathing",
      params: nav.symptom
        ? { symptom: nav.symptom, phase: nav.phase }
        : { phase: nav.phase },
    });
  };

  return (
    <AppView style={[surface.root, styles.card]}>
      <AppText style={styles.recommendEyebrow}>Recommended exercise</AppText>
      <AppText style={styles.recommendTitle} weight="bold">
        {rec.name}
      </AppText>
      <AppText style={styles.recommendSubtitle}>{rec.tag}</AppText>
      <Pressable
        onPress={openExercise}
        accessibilityRole="button"
        accessibilityLabel={`Start ${rec.name}`}
      >
        <AppText style={styles.startLink} weight="bold">
          Start →
        </AppText>
      </Pressable>
    </AppView>
  );
}
