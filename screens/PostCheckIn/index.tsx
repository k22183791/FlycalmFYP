import AppLayout from "@/components/AppLayout";
import { AppText } from "@/components/AppText";
import AppTouchable from "@/components/AppTouchable";
import { AppView } from "@/components/AppView";
import ScreenBackLink from "@/components/ui/ScreenBackLink";
import { useStyles } from "@/hooks/use-styles";
import { useAppColors } from "@/hooks/useAppColors";
import { getFlightBreathingAccordionItems } from "@/lib/flightBreathingAccordionItems";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { Pressable } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { createStyles } from "./styles";

export default function PostCheckIn() {
  const insets = useSafeAreaInsets();
  const palette = useAppColors();
  const styles = useStyles(createStyles);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(
    "route-drops-turbulence",
  );

  const items = useMemo(() => getFlightBreathingAccordionItems(), []);

  const openSmartBreathing = (item: (typeof items)[number]) => {
    setSelectedId(item.id);
    if (item.symptom) {
      router.push({
        pathname: "/smart-breathing",
        params: { symptom: item.symptom, phase: item.phase },
      });
    } else {
      router.push({
        pathname: "/smart-breathing",
        params: { phase: item.phase },
      });
    }
  };

  return (
    <AppLayout header={<ScreenBackLink />}>
      <AppView style={styles.page}>
        <AppView style={styles.hero}>
          <Animated.View
            entering={FadeInUp.duration(420).delay(80)}
            style={styles.alignCenter}
          >
            <AppView style={styles.checkCircle}>
              <Ionicons name="checkmark" size={40} color={palette.success} />
            </AppView>
          </Animated.View>

          <Animated.View
            entering={FadeInUp.duration(420).delay(180)}
            style={styles.alignCenter}
          >
            <AppText style={styles.title} weight="bold">
              Well done.
            </AppText>
            <AppText style={styles.subtitle}>
              Your body is settling. That worked.
            </AppText>
          </Animated.View>
        </AppView>

        <Animated.View
          entering={FadeInUp.duration(420).delay(260)}
          style={[styles.actions, { paddingBottom: 24 + insets.bottom }]}
        >
          <AppTouchable
            title="Do it again"
            onPress={() => router.back()}
            containerStyle={styles.primaryBtn}
            textStyle={styles.primaryBtnText}
          />
          <AppTouchable
            title="Next breathing exercise →"
            onPress={() => router.replace("/smart-breathing")}
            containerStyle={styles.outlineBtn}
            textStyle={styles.outlineBtnText}
          />

          <AppView style={styles.accordionSection}>
            <Pressable
              style={styles.accordionTrigger}
              onPress={() => setAccordionOpen((o) => !o)}
              accessibilityRole="button"
              accessibilityState={{ expanded: accordionOpen }}
            >
              <AppText style={styles.accordionTriggerText}>
                All breathing exercises
              </AppText>
              <Ionicons
                name={accordionOpen ? "chevron-up" : "chevron-down"}
                size={22}
                color={palette.blue}
              />
            </Pressable>

            {accordionOpen && (
              <Animated.View
                entering={FadeInUp.duration(320).delay(40)}
                style={styles.accordionPanel}
              >
                {items.map((item) => {
                  const active = selectedId === item.id;
                  return (
                    <Pressable
                      key={item.id}
                      style={[
                        styles.exerciseRow,
                        active && styles.exerciseRowActive,
                      ]}
                      onPress={() => openSmartBreathing(item)}
                    >
                      <AppText
                        style={[
                          styles.exerciseTitle,
                          active && styles.exerciseTitleSelected,
                        ]}
                        weight="bold"
                      >
                        {item.title}
                      </AppText>
                      <AppText style={styles.exerciseSub}>
                        {item.subtitle}
                      </AppText>
                    </Pressable>
                  );
                })}
              </Animated.View>
            )}
          </AppView>

          <AppView style={styles.tabReturnSection}>
            <Pressable
              onPress={() => router.replace("/(tabs)/calm")}
              accessibilityRole="link"
              accessibilityLabel="Back to Calm Hub tab"
              style={styles.tabReturnLinkHit}
            >
              <AppText style={styles.tabLink}>Back to Calm Hub</AppText>
            </Pressable>
          </AppView>
        </Animated.View>
      </AppView>
    </AppLayout>
  );
}
