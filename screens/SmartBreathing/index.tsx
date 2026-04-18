import AppLayout from "@/components/AppLayout";
import ColorLegend from "@/components/smart-breathing/ColorLegend";
import CycleDots from "@/components/smart-breathing/CycleDots";
import ExerciseTagCard from "@/components/smart-breathing/ExerciseTagCard";
import FooterControls from "@/components/smart-breathing/FooterControls";
import NextCuePill from "@/components/smart-breathing/NextCuePill";
import PhaseCue from "@/components/smart-breathing/PhaseCue";
import ProgressBar from "@/components/smart-breathing/ProgressBar";
import RingTimer from "@/components/smart-breathing/RingTimer";
import { BREATHING_RING_CIRC } from "@/components/smart-breathing/constants";
import ScreenBackLink from "@/components/ui/ScreenBackLink";
import { colors } from "@/constants/colors";
import {
  triggerBreathingHaptic,
  triggerExerciseCompleteHaptic,
} from "@/lib/breathingHaptics";
import type { Exercise } from "@/lib/breathingRoutes";
import { resolveExercise } from "@/lib/breathingRoutes";
import { router, useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FLASH_MS = 800;
const WARN_SEC = 1.5;

function paramOne(v: string | string[] | undefined): string | undefined {
  if (v == null) return undefined;
  const s = Array.isArray(v) ? v[0] : v;
  return s.length > 0 ? s : undefined;
}

export default function SmartBreathing() {
  const params = useLocalSearchParams<{ symptom?: string; phase?: string }>();
  const ex: Exercise = resolveExercise(
    paramOne(params.symptom),
    paramOne(params.phase),
  );
  const insets = useSafeAreaInsets();

  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const done = false;
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [round, setRound] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [barCol, setBarCol] = useState<string>(colors.blue);
  const [arcOffset, setArcOffset] = useState(BREATHING_RING_CIRC);
  const [countdown, setCountdown] = useState("");
  const [bigWord, setBigWord] = useState("Ready");
  const [subWord, setSubWord] = useState("Tap start when you're ready");
  const [cuePill, setCuePill] = useState({ text: "", show: false });

  const rafRef = useRef<number | null>(null);
  const stateRef = useRef({
    run: false,
    paused: false,
    flashing: false,
    flashEl: 0,
    el: 0,
    last: null as number | null,
    pi: 0,
    rnd: 0,
  });

  const phases = ex.phases;

  const stop = useCallback(() => {
    stateRef.current.run = false;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => () => stop(), [stop]);

  const doneExercise = useCallback((completedAllRounds: boolean) => {
    stateRef.current.run = false;
    if (completedAllRounds) {
      triggerExerciseCompleteHaptic();
    }
    router.replace("/post-checkin");
  }, []);

  const tick = useCallback(
    (ts: number) => {
      const s = stateRef.current;
      if (!s.run) return;

      if (s.flashing) {
        if (!s.last) s.last = ts;
        s.flashEl += (ts - s.last) / 1000;
        s.last = ts;
        if (s.flashEl >= FLASH_MS / 1000) {
          s.flashing = false;
          s.flashEl = 0;
          s.last = null;
          setCuePill({ text: "", show: false });

          s.pi = (s.pi + 1) % phases.length;
          if (s.pi === 0) {
            s.rnd++;
            if (s.rnd >= ex.rounds) {
              doneExercise(true);
              return;
            }
            setRound(s.rnd);
          }
          setPhaseIdx(s.pi);
          const ph = phases[s.pi];
          triggerBreathingHaptic(ph.haptic);
          setBarCol(ph.col);
          setBigWord(ph.w);
          setSubWord(ph.s);
        }
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (!s.last) s.last = ts;
      s.el += (ts - s.last) / 1000;
      s.last = ts;

      const ph = phases[s.pi];
      const frac = Math.min(s.el / ph.d, 1);
      const bw = ph.fill ? frac * 100 : (1 - frac) * 100;
      const af = ph.fill ? frac : 1 - frac;
      const offset = Math.round(BREATHING_RING_CIRC * (1 - af));
      const tl = ph.d - s.el;

      setBarWidth(bw);
      setBarCol(ph.col);
      setArcOffset(offset);
      setCountdown(String(Math.ceil(Math.max(tl, 0))) || "");
      setBigWord(ph.w);
      setSubWord(ph.s);
      setRound(s.rnd);

      if (tl <= WARN_SEC && tl > 0 && s.el > ph.d * 0.35) {
        setCuePill({ text: ph.next, show: true });
      } else if (s.el < ph.d * 0.3) {
        setCuePill({ text: "", show: false });
      }

      if (s.el >= ph.d) {
        s.flashing = true;
        s.flashEl = 0;
        s.el = 0;
        s.last = null;
        setCuePill({ text: ph.next, show: true });
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    },
    [phases, ex.rounds, doneExercise],
  );

  const startLoop = useCallback(() => {
    stateRef.current.run = true;
    stateRef.current.last = null;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const handleToggle = useCallback(() => {
    if (done) {
      resetExercise();
      return;
    }
    if (!started) {
      setStarted(true);
      const ph = phases[0];
      triggerBreathingHaptic(ph.haptic);
      setBigWord(ph.w);
      setSubWord(ph.s);
      setBarCol(ph.col);
      stateRef.current.pi = 0;
      stateRef.current.rnd = 0;
      stateRef.current.el = 0;
      startLoop();
    } else if (paused) {
      stateRef.current.last = null;
      setPaused(false);
      stateRef.current.run = true;
      rafRef.current = requestAnimationFrame(tick);
    } else {
      stop();
      setPaused(true);
    }
  }, [done, started, paused, phases, startLoop, stop, tick]);

  function resetExercise() {
    stop();
    const s = stateRef.current;
    s.el = 0;
    s.last = null;
    s.pi = 0;
    s.rnd = 0;
    s.flashing = false;
    s.flashEl = 0;
    setStarted(false);
    setPaused(false);
    setPhaseIdx(0);
    setRound(0);
    setBarWidth(0);
    setBarCol(colors.blue);
    setArcOffset(BREATHING_RING_CIRC);
    setCountdown("");
    setBigWord("Ready");
    setSubWord("Tap start when you're ready");
    setCuePill({ text: "", show: false });
  }

  const footer = (
    <FooterControls
      started={started}
      paused={paused}
      bottomInset={insets.bottom}
      onToggleRun={handleToggle}
      onEnd={() => doneExercise(false)}
    />
  );

  return (
    <AppLayout
      header={
        <ScreenBackLink
          onPress={() => {
            stop();
            router.back();
          }}
        />
      }
      footer={footer}
    >
      <ExerciseTagCard tag={ex.tag} name={ex.name} />
      <ColorLegend />
      <PhaseCue title={bigWord} subtitle={subWord} />
      <RingTimer
        strokeColor={barCol}
        arcOffset={arcOffset}
        countdown={countdown}
      />
      <ProgressBar widthPercent={barWidth} color={barCol} />
      <NextCuePill text={cuePill.text} visible={cuePill.show} />
      <CycleDots
        totalRounds={ex.rounds}
        currentRound={round}
        started={started}
        done={done}
      />
    </AppLayout>
  );
}
