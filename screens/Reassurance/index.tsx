import AppLayout from "@/components/AppLayout";
import { AppText } from "@/components/AppText";
import AppTouchable from "@/components/AppTouchable";
import { AppView } from "@/components/AppView";
import ScreenBackLink from "@/components/ui/ScreenBackLink";
import { useStyles } from "@/hooks/use-styles";
import { useSafeInsets } from "@/hooks/useSafeInsets";
import { router } from "expo-router";
import React from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import { createStyles } from "./styles";

const CARDS = [
  {
    title: "Pilots expect turbulence",
    body: "Turbulence is mapped and planned for. Bumpy air before takeoff is routine. Pilots see it coming.",
  },
  {
    title: "The plane is built for this",
    body: "Aircraft wings flex up to 90° in testing. Turbulence barely registers as stress on the airframe.",
  },
  {
    title: "You're safer than in a car",
    body: "Flying is 100x safer than driving. Turbulence has never caused a modern commercial plane to crash.",
  },
  {
    title: "What pilots know that you don't",
    body: "Pilots receive weather reports before and during every flight. They are always several steps ahead of conditions.",
  },
] as const;

const ENTRANCE_MS = 420;
const TITLE_DELAY = 90;
const STAGGER_MS = 85;

export default function Reassurance() {
  const { bottom } = useSafeInsets();
  const styles = useStyles(createStyles);
  const goToCalm = () => {
    router.replace("/calm");
  };

  return (
    <AppLayout
      header={
        <>
          <ScreenBackLink />
        </>
      }
    >
      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(TITLE_DELAY)}
      >
        <AppText style={styles.title} weight="bold">
          Everything is Normal
        </AppText>
      </Animated.View>

      <AppView style={styles.list}>
        {CARDS.map((c, i) => (
          <Animated.View
            key={c.title}
            entering={FadeInUp.duration(ENTRANCE_MS).delay(
              TITLE_DELAY + STAGGER_MS * (i + 1),
            )}
          >
            <AppView style={styles.card}>
              <AppText style={styles.cardTitle} weight="bold">
                {c.title}
              </AppText>
              <AppText style={styles.cardBody}>{c.body}</AppText>
            </AppView>
          </Animated.View>
        ))}
      </AppView>

      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(
          TITLE_DELAY + STAGGER_MS * (CARDS.length + 1),
        )}
        style={{ paddingBottom: bottom }}
      >
        <AppTouchable
          title="Back to Calm Mode"
          onPress={goToCalm}
          containerStyle={styles.footerBtn}
          textStyle={styles.footerBtnText}
        />
      </Animated.View>
    </AppLayout>
  );
}
