import AppLayout from "@/components/AppLayout";
import SafeFooterButtons from "@/components/safe/SafeFooterButtons";
import SafeHeroCard from "@/components/safe/SafeHeroCard";
import SafeQuoteCard from "@/components/safe/SafeQuoteCard";
import SafeRecommendationCard from "@/components/safe/SafeRecommendationCard";
import ScreenBackLink from "@/components/ui/ScreenBackLink";
import { useStyles } from "@/hooks/use-styles";
import { resolveExercise } from "@/lib/breathingRoutes";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import Animated, { FadeInUp } from "react-native-reanimated";

import { createStyles } from "./styles";

const ENTRANCE_MS = 420;
const TITLE_DELAY = 90;
const STAGGER_MS = 95;

function d(i: number) {
  return TITLE_DELAY + STAGGER_MS * i;
}

function paramOne(v: string | string[] | undefined): string | undefined {
  if (v == null) return undefined;
  const s = Array.isArray(v) ? v[0] : v;
  return s.length > 0 ? s : undefined;
}

export default function SafeScreen() {
  const styles = useStyles(createStyles);
  const raw = useLocalSearchParams<{ symptom?: string; phase?: string }>();
  const symptom = paramOne(raw.symptom);
  const phase = paramOne(raw.phase);

  const ex = useMemo(() => resolveExercise(symptom, phase), [symptom, phase]);

  return (
    <AppLayout header={<ScreenBackLink />}>
      <Animated.View entering={FadeInUp.duration(ENTRANCE_MS).delay(d(0))}>
        <SafeHeroCard message={ex.safe} />
      </Animated.View>

      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(d(1))}
        style={styles.section}
      >
        <SafeQuoteCard info={ex.info} />
      </Animated.View>

      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(d(2))}
        style={styles.section}
      >
        <SafeRecommendationCard
          tag={ex.tag}
          exerciseName={ex.name}
          why={ex.why}
        />
      </Animated.View>

      <Animated.View entering={FadeInUp.duration(ENTRANCE_MS).delay(d(3))}>
        <SafeFooterButtons symptom={symptom} phase={phase} />
      </Animated.View>
    </AppLayout>
  );
}
