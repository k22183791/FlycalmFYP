import AppLayout from "@/components/AppLayout";
import { AppText } from "@/components/AppText";
import AppTouchable from "@/components/AppTouchable";
import { AppView } from "@/components/AppView";
import ScreenBackLink from "@/components/ui/ScreenBackLink";
import { colors } from "@/constants/colors";
import { useStyles } from "@/hooks/use-styles";
import { useSafeInsets } from "@/hooks/useSafeInsets";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Pressable } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { createStyles } from "./styles";

type FeatherName = React.ComponentProps<typeof Feather>["name"];
type MCIconName = React.ComponentProps<typeof MaterialCommunityIcons>["name"];

const ICON_COLOR = colors.textGray800;

type Phase = {
  id: string;
  label: string;
  caption: string;
  iconBg: string;
  feather?: FeatherName;
  mcicon?: MCIconName;
};

const PHASES: Phase[] = [
  {
    id: "gate",
    label: "At the gate or boarding",
    caption: "Still on the ground",
    iconBg: colors.phaseGateBg,
    mcicon: "hexagon-outline",
  },
  {
    id: "takeoff",
    label: "Taking off",
    caption: "Engines loud, climbing",
    iconBg: colors.phaseTakeoffBg,
    feather: "arrow-up-right",
  },
  {
    id: "smooth",
    label: "In the air — smooth",
    caption: "Cruising, no turbulence",
    iconBg: colors.phaseSmoothBg,
    feather: "minus",
  },
  {
    id: "turbulence",
    label: "Turbulence happening now",
    caption: "Shaking or jolting",
    iconBg: colors.phaseTurbulenceBg,
    mcicon: "approximately-equal",
  },
  {
    id: "landing",
    label: "Coming in to land",
    caption: "Descending",
    iconBg: colors.phaseLandingBg,
    feather: "arrow-down-right",
  },
  {
    id: "landed",
    label: "We've landed",
    caption: "On the ground, waiting",
    iconBg: colors.phaseGateBg,
    feather: "check",
  },
];

const ENTRANCE_MS = 420;
const TITLE_DELAY = 90;
const STAGGER_MS = 85;

function d(i: number) {
  return TITLE_DELAY + STAGGER_MS * i;
}

function paramOne(v: string | string[] | undefined): string | undefined {
  if (v == null) return undefined;
  const s = Array.isArray(v) ? v[0] : v;
  return s.length > 0 ? s : undefined;
}

export default function FlightPhase() {
  const { bottom } = useSafeInsets();
  const styles = useStyles(createStyles);
  const { symptom: symptomRaw } = useLocalSearchParams<{ symptom?: string }>();
  const symptom = paramOne(symptomRaw);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <AppLayout header={<ScreenBackLink />}>
      <Animated.View entering={FadeInUp.duration(ENTRANCE_MS).delay(d(0))}>
        <AppText style={styles.title} weight="bold">
          Where are you right now?
        </AppText>
      </Animated.View>

      <Animated.View entering={FadeInUp.duration(ENTRANCE_MS).delay(d(1))}>
        <AppText style={styles.subtitle}>
          We'll match the right technique to this exact moment.
        </AppText>
      </Animated.View>

      <Animated.View entering={FadeInUp.duration(ENTRANCE_MS).delay(d(2))}>
        <AppView style={styles.list}>
          {PHASES.map((p) => {
            const active = selected === p.id;
            return (
              <Pressable
                key={p.id}
                onPress={() => setSelected(p.id)}
                style={[styles.row, active && styles.rowActive]}
              >
                <AppView
                  style={[styles.iconCircle, { backgroundColor: p.iconBg }]}
                >
                  {p.feather ? (
                    <Feather name={p.feather} size={20} color={ICON_COLOR} />
                  ) : (
                    <MaterialCommunityIcons
                      name={p.mcicon!}
                      size={20}
                      color={ICON_COLOR}
                    />
                  )}
                </AppView>
                <AppView style={styles.textBlock}>
                  <AppText style={styles.label} weight="bold">
                    {p.label}
                  </AppText>
                  <AppText style={styles.caption}>{p.caption}</AppText>
                </AppView>
              </Pressable>
            );
          })}
        </AppView>
      </Animated.View>

      <Animated.View entering={FadeInUp.duration(ENTRANCE_MS).delay(d(3))}>
        <AppView style={[styles.footer, { paddingBottom: bottom }]}>
          <AppTouchable
            title="Show me what to do"
            disabled={!selected}
            onPress={() =>
              router.push({
                pathname: "/safe-screen",
                params: {
                  ...(symptom ? { symptom } : {}),
                  phase: selected!,
                },
              })
            }
            containerStyle={styles.continueBtn}
            textStyle={styles.continueBtnText}
          />
        </AppView>
      </Animated.View>
    </AppLayout>
  );
}
