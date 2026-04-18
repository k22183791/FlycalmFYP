import { useStyles } from "@/hooks/use-styles";
import AppLayout from "@/components/AppLayout";
import { AppText } from "@/components/AppText";
import AppTouchable from "@/components/AppTouchable";
import { AppView } from "@/components/AppView";
import ScreenBackLink from "@/components/ui/ScreenBackLink";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

import { colors } from "@/constants/colors";
import { createStyles } from "./styles";

const SYMPTOMS = [
  {
    id: "shaky",
    icon: "〰",
    iconBg: colors.symptomIndigoWash,
    label: "The plane feels shaky",
    sub: "Movement or vibration",
  },
  {
    id: "drops",
    icon: "↓",
    iconBg: colors.symptomAmberWash,
    label: "I feel sudden drops",
    sub: "Stomach lurch or falling feeling",
  },
  {
    id: "tense",
    icon: "⚡",
    iconBg: colors.symptomRoseWash,
    label: "My body feels tense",
    sub: "Tight muscles, bracing",
  },
  {
    id: "heart",
    icon: "♡",
    iconBg: colors.symptomRoseWash,
    label: "My heart is racing",
    sub: "Fast pulse, chest tight",
  },
] as const;

const ENTRANCE_MS = 420;
const TITLE_DELAY = 90;
const STAGGER_MS = 85;

export default function CheckIn() {
  const styles = useStyles(createStyles);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <AppLayout header={<ScreenBackLink />}>
      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(TITLE_DELAY)}
      >
        <AppText style={styles.title} weight="bold">
          Let&apos;s check in
        </AppText>
      </Animated.View>

      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(
          TITLE_DELAY + STAGGER_MS,
        )}
      >
        <AppText style={styles.subtitle}>
          What are you noticing right now?
        </AppText>
      </Animated.View>

      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(
          TITLE_DELAY + STAGGER_MS * 2,
        )}
      >
        <AppView style={styles.list}>
          {SYMPTOMS.map(({ id, icon, iconBg, label, sub }) => {
            const active = selected === id;
            return (
              <Pressable
                key={id}
                onPress={() => setSelected(id)}
                style={[styles.symptom, active && styles.symptomActive]}
              >
                <AppView
                  style={[styles.iconCircle, { backgroundColor: iconBg }]}
                >
                  <AppText style={styles.iconEmoji}>{icon}</AppText>
                </AppView>
                <AppView style={styles.textBlock}>
                  <AppText style={styles.symptomLabel} weight="bold">
                    {label}
                  </AppText>
                  <AppText style={styles.symptomSub}>{sub}</AppText>
                </AppView>
                <AppView
                  style={[styles.checkbox, active && styles.checkboxActive]}
                >
                  {active && (
                    <AppText style={styles.checkboxTick} weight="bold">
                      ✓
                    </AppText>
                  )}
                </AppView>
              </Pressable>
            );
          })}
        </AppView>
      </Animated.View>

      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(
          TITLE_DELAY + STAGGER_MS * 3,
        )}
      >
        <AppView style={styles.footer}>
          <AppTouchable
            title="Continue"
            disabled={!selected}
            onPress={() =>
              router.push({
                pathname: "/flight-phase",
                params: { symptom: selected! },
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
