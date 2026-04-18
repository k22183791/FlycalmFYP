import AppLayout from "@/components/AppLayout";
import { AppText } from "@/components/AppText";
import AppTouchable from "@/components/AppTouchable";
import { AppView } from "@/components/AppView";
import ScreenBackLink from "@/components/ui/ScreenBackLink";
import { useStyles } from "@/hooks/use-styles";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import Animated, { Keyframe } from "react-native-reanimated";

import { createStyles } from "./styles";

const STEPS = [
  {
    title: "4 Things You Can Touch",
    body: "Your seat. Your hands. The armrest. The seat belt.",
  },
  {
    title: "3 Things You Can Hear",
    body: "The engine hum. Air conditioning. Voices nearby.",
  },
  {
    title: "2 Things You Can See",
    body: "Pick two fixed objects. Keep your eyes on them.",
  },
  {
    title: "1 Slow Breath",
    body: "In through your nose. Long and slow out.",
  },
] as const;

const SLIDE_MS = 520;
const CARD_NUDGE_X = 28;

type EnterDir = "forward" | "back";

export default function Grounding() {
  const styles = useStyles(createStyles);
  const [step, setStep] = useState(0);
  const [enterDir, setEnterDir] = useState<EnterDir>("forward");

  const isLast = step === STEPS.length - 1;
  const current = STEPS[step];
  const filledSegments = step + 1;

  const goNext = () => {
    if (step >= STEPS.length - 1) return;
    setEnterDir("forward");
    setStep((s) => s + 1);
  };

  const goPrev = () => {
    if (step <= 0) return;
    setEnterDir("back");
    setStep((s) => s - 1);
  };

  const entering = useMemo(() => {
    const fromX = enterDir === "forward" ? -CARD_NUDGE_X : CARD_NUDGE_X;
    return new Keyframe({
      0: { opacity: 0, transform: [{ translateX: fromX }] },
      100: { opacity: 1, transform: [{ translateX: 0 }] },
    }).duration(SLIDE_MS);
  }, [enterDir]);

  return (
    <AppLayout
      header={
        <>
          <ScreenBackLink />
        </>
      }
    >
      <AppText style={styles.title} weight="bold">
        Grounding Exercise
      </AppText>
      <AppText style={styles.subtitle}>
        Redirect your attention to the world around you.
      </AppText>

      <AppView style={styles.progressRow}>
        {STEPS.map((_, i) => (
          <AppView
            key={i}
            style={[styles.segment, i < filledSegments && styles.segmentFilled]}
          />
        ))}
      </AppView>

      <AppView style={styles.cardClip}>
        <Animated.View key={step} entering={entering}>
          <AppView style={styles.card}>
            <AppText style={styles.stepTitle} weight="bold">
              {current.title}
            </AppText>
            <AppText style={styles.stepBody}>{current.body}</AppText>
          </AppView>
        </Animated.View>
      </AppView>

      {step === 0 ? (
        <AppView style={styles.navSingle}>
          <AppTouchable
            title="Next Sense"
            onPress={goNext}
            containerStyle={styles.btnPrimary}
            textStyle={styles.btnPrimaryText}
            numberOfLines={1}
            ellipsizeMode="tail"
          />
        </AppView>
      ) : isLast ? (
        <AppView style={styles.navRow}>
          <AppView style={styles.navBtnFlex}>
            <AppTouchable
              title="Previous"
              onPress={goPrev}
              containerStyle={styles.btnOutline}
              textStyle={styles.btnOutlineText}
              numberOfLines={1}
              ellipsizeMode="tail"
            />
          </AppView>
          <AppView style={styles.navBtnFlex}>
            <AppTouchable
              title="Back to Calm Mode"
              onPress={() => router.replace("/(tabs)/calm")}
              containerStyle={styles.btnPrimary}
              textStyle={styles.btnPrimaryText}
              numberOfLines={1}
              ellipsizeMode="tail"
            />
          </AppView>
        </AppView>
      ) : (
        <AppView style={styles.navRow}>
          <AppView style={styles.navBtnFlex}>
            <AppTouchable
              title="Previous"
              onPress={goPrev}
              containerStyle={styles.btnOutline}
              textStyle={styles.btnOutlineText}
              numberOfLines={1}
              ellipsizeMode="tail"
            />
          </AppView>
          <AppView style={styles.navBtnFlex}>
            <AppTouchable
              title="Next Sense"
              onPress={goNext}
              containerStyle={styles.btnPrimary}
              textStyle={styles.btnPrimaryText}
              numberOfLines={1}
              ellipsizeMode="tail"
            />
          </AppView>
        </AppView>
      )}
    </AppLayout>
  );
}
