import AppLayout from "@/components/AppLayout";
import { AppText } from "@/components/AppText";
import AppTouchable from "@/components/AppTouchable";
import { AppView } from "@/components/AppView";
import Icons from "@/components/ui/Icons";
import { colors } from "@/constants/colors";
import { useStyles } from "@/hooks/use-styles";
import {
  triggerBreathingHaptic,
  triggerExerciseCompleteHaptic,
} from "@/lib/breathingHaptics";
import {
  getStandaloneTechnique,
  type PhaseType,
} from "@/lib/standaloneBreathingTechniques";
import { router } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Pressable } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { createStyles } from "./styles";

const TOTAL_CYCLES = 3;
const TRANSITION_MS = 600;

const COLOR_INHALE = colors.blue;
const COLOR_EXHALE = colors.blueExhale;
const COLOR_TRANSITION = colors.warmAccent;

function barColorForType(type: PhaseType): string {
  if (type === "exhale") return COLOR_EXHALE;
  return COLOR_INHALE;
}

type Props = {
  technique?: string;
};

export default function BreathingExercise({ technique }: Props) {
  const styles = useStyles(createStyles);
  const config = useMemo(() => getStandaloneTechnique(technique), [technique]);
  const insets = useSafeAreaInsets();

  const [started, setStarted] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [paused, setPaused] = useState(false);
  const [done, setDone] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  const phaseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );
  const doneNavigateRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const hapticPhaseKeyRef = useRef<string | null>(null);

  const currentPhase = config.phases[phaseIndex];

  useEffect(() => {
    if (!started) {
      hapticPhaseKeyRef.current = null;
    }
  }, [started]);

  useEffect(() => {
    if (!started || done || transitioning) return;
    const key = `${cycle}-${phaseIndex}`;
    if (hapticPhaseKeyRef.current === key) return;
    hapticPhaseKeyRef.current = key;
    triggerBreathingHaptic(currentPhase.haptic);
  }, [phaseIndex, cycle, started, done, transitioning, currentPhase.haptic]);

  useEffect(() => {
    return () => {
      if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
      if (doneNavigateRef.current) clearTimeout(doneNavigateRef.current);
    };
  }, []);

  useEffect(() => {
    if (!started || paused || done || transitioning) return;

    setProgress(0);
    startTimeRef.current = Date.now();

    progressIntervalRef.current = setInterval(() => {
      if (!startTimeRef.current) return;
      const elapsed = Date.now() - startTimeRef.current;
      const p = Math.min(elapsed / currentPhase.duration, 1);
      setProgress(p);
    }, 16);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, [
    phaseIndex,
    cycle,
    started,
    paused,
    done,
    transitioning,
    currentPhase.duration,
  ]);

  useEffect(() => {
    if (!started || paused || done || transitioning) return;

    phaseTimerRef.current = setTimeout(() => {
      setTransitioning(true);
      setProgress(1);

      transitionTimerRef.current = setTimeout(() => {
        setTransitioning(false);
        const next = (phaseIndex + 1) % config.phases.length;
        if (next === 0) {
          const nextCycle = cycle + 1;
          if (nextCycle >= TOTAL_CYCLES) {
            triggerExerciseCompleteHaptic();
            setDone(true);
            doneNavigateRef.current = setTimeout(() => {
              router.replace("/post-checkin");
            }, 800);
            return;
          }
          setCycle(nextCycle);
        }
        setPhaseIndex(next);
        setProgress(0);
      }, TRANSITION_MS);
    }, currentPhase.duration);

    return () => {
      if (phaseTimerRef.current) {
        clearTimeout(phaseTimerRef.current);
        phaseTimerRef.current = null;
      }
    };
  }, [
    phaseIndex,
    cycle,
    started,
    paused,
    done,
    transitioning,
    currentPhase.duration,
    config.phases.length,
  ]);

  const barColor = transitioning
    ? COLOR_TRANSITION
    : barColorForType(currentPhase.type);
  const barWidthPct = transitioning ? 100 : Math.round(progress * 100);

  const footer = !done ? (
    <AppView style={[styles.footer, { paddingBottom: 16 + insets.bottom }]}>
      {!started ? (
        <AppTouchable
          title="Start"
          onPress={() => setStarted(true)}
          containerStyle={styles.startBtn}
          textStyle={styles.startBtnText}
        />
      ) : (
        <AppTouchable
          title={paused ? "Resume" : "Pause"}
          onPress={() => setPaused((p) => !p)}
          containerStyle={styles.pauseBtn}
          textStyle={styles.pauseBtnText}
        />
      )}
      <AppView style={styles.linkRow}>
        <Pressable onPress={() => router.push("/grounding")}>
          <AppText style={styles.link}>Grounding Exercise</AppText>
        </Pressable>
        <Pressable onPress={() => router.push("/reassurance")}>
          <AppText style={styles.link}>I Need Reassurance</AppText>
        </Pressable>
      </AppView>
    </AppView>
  ) : (
    <AppView style={{ height: 12 + insets.bottom }} />
  );

  return (
    <AppLayout
      header={
        <AppView style={styles.headerRow}>
          <Pressable onPress={() => router.back()} hitSlop={12}>
            <Icons
              family="Ionicons"
              name="arrow-back"
              size={22}
              color={colors.black}
            />
          </Pressable>
          <AppText style={styles.headerTitle} numberOfLines={1}>
            {config.name}
          </AppText>
          <AppView style={styles.headerSpacer} />
        </AppView>
      }
      footer={footer}
    >
      <AppText style={styles.reassurance}>{config.reassurance}</AppText>

      <AppView style={styles.mainBlock}>
        <Animated.View
          key={started ? `${phaseIndex}-${cycle}` : "ready"}
          entering={FadeIn.duration(280)}
          style={styles.cueBlock}
        >
          <AppText style={styles.bigLabel} weight="bold">
            {started ? currentPhase.label : "Ready"}
          </AppText>
          <AppText style={styles.bigSub}>
            {started ? currentPhase.sub : "Tap start whenever you're ready"}
          </AppText>
        </Animated.View>

        <AppView style={styles.barWrap}>
          <AppView style={styles.barOuter}>
            <AppView
              style={[
                styles.barInner,
                { width: `${barWidthPct}%`, backgroundColor: barColor },
              ]}
            />
          </AppView>
          <AppView style={styles.cueLine}>
            {started && !transitioning && (
              <AppText style={styles.cueSmall}>
                {currentPhase.type === "exhale"
                  ? "exhale"
                  : currentPhase.type === "hold"
                    ? "hold"
                    : "inhale"}
              </AppText>
            )}
            {transitioning && (
              <AppText style={styles.cueTransition}>next phase coming…</AppText>
            )}
          </AppView>
        </AppView>

        <AppView style={styles.legendRow}>
          {[
            { color: COLOR_INHALE, label: "inhale / hold" },
            { color: COLOR_EXHALE, label: "exhale" },
            { color: COLOR_TRANSITION, label: "next phase" },
          ].map(({ color, label }) => (
            <AppView key={label} style={styles.legendItem}>
              <AppView style={[styles.legendDot, { backgroundColor: color }]} />
              <AppText style={styles.legendLabel}>{label}</AppText>
            </AppView>
          ))}
        </AppView>

        <AppView style={styles.dotsRow}>
          {Array.from({ length: TOTAL_CYCLES }).map((_, i) => (
            <AppView
              key={i}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    i < cycle
                      ? colors.blue
                      : i === cycle && started
                        ? colors.blue
                        : colors.borderInput,
                  opacity: i < cycle ? 0.45 : 1,
                },
              ]}
            />
          ))}
        </AppView>

        {done && (
          <Animated.View entering={FadeIn.duration(300)}>
            <AppText style={styles.doneText} weight="bold">
              Well done.
            </AppText>
          </Animated.View>
        )}
      </AppView>
    </AppLayout>
  );
}
