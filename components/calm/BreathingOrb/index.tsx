import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import { useStyles } from "@/hooks/use-styles";
import React, { useCallback, useEffect, useState } from "react";
import Animated, {
  Easing,
  cancelAnimation,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { OUTER_MAX, OUTER_MIN, createStyles } from "./styles";

const INHALE_MS = 4500;
const EXHALE_MS = 4500;

const FADE_OUT_MS = 220;
const FADE_IN_MS = 300;

export default function BreathingOrb() {
  const styles = useStyles(createStyles);
  const outerSize = useSharedValue(OUTER_MIN);
  const cueOpacity = useSharedValue(1);
  const [cue, setCue] = useState("Breathe in...");

  const applyCueAndFadeIn = useCallback(
    (next: string) => {
      setCue(next);
      cueOpacity.value = withTiming(1, {
        duration: FADE_IN_MS,
        easing: Easing.in(Easing.cubic),
      });
    },
    [cueOpacity],
  );

  const transitionToCue = useCallback(
    (next: string) => {
      cueOpacity.value = withTiming(
        0,
        {
          duration: FADE_OUT_MS,
          easing: Easing.out(Easing.cubic),
        },
        (finished) => {
          if (finished) runOnJS(applyCueAndFadeIn)(next);
        },
      );
    },
    [cueOpacity, applyCueAndFadeIn],
  );

  useEffect(() => {
    const easing = Easing.inOut(Easing.ease);
    outerSize.value = withRepeat(
      withSequence(
        withTiming(OUTER_MAX, { duration: INHALE_MS, easing }, (finished) => {
          if (finished) runOnJS(transitionToCue)("Breathe out...");
        }),
        withTiming(OUTER_MIN, { duration: EXHALE_MS, easing }, (finished) => {
          if (finished) runOnJS(transitionToCue)("Breathe in...");
        }),
      ),
      -1,
      false,
    );
    return () => {
      cancelAnimation(outerSize);
      cancelAnimation(cueOpacity);
    };
  }, [outerSize, cueOpacity, transitionToCue]);

  const animatedOuter = useAnimatedStyle(() => {
    const s = outerSize.value;
    return {
      width: s,
      height: s,
      borderRadius: s / 2,
    };
  });

  const cueAnimated = useAnimatedStyle(() => ({
    opacity: cueOpacity.value,
  }));

  return (
    <AppView style={styles.column}>
      <AppView style={styles.orbSlotFixed}>
        <Animated.View style={[styles.outerBase, animatedOuter]}>
          <AppView style={styles.innerCircle} />
        </Animated.View>
      </AppView>
      <Animated.View style={[styles.cueWrap, cueAnimated]}>
        <AppText style={styles.cue}>{cue}</AppText>
      </Animated.View>
    </AppView>
  );
}
