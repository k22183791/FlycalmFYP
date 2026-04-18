import { AppText } from "@/components/AppText";
import AppTouchable from "@/components/AppTouchable";
import { AppView } from "@/components/AppView";
import { useStyles } from "@/hooks/use-styles";
import { router } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { createStyles } from "./styles";

type Props = {
  symptom?: string;
  phase?: string;
};

export default function SafeFooterButtons({ symptom, phase }: Props) {
  const insets = useSafeAreaInsets();
  const styles = useStyles(createStyles);

  const startOver = () => {
    router.replace("/checkin");
  };

  const startBreathingExercise = () => {
    router.push({
      pathname: "/smart-breathing",
      params: {
        ...(symptom ? { symptom } : {}),
        ...(phase ? { phase } : {}),
      },
    });
  };

  return (
    <AppView style={[styles.wrap, { paddingBottom: 16 + insets.bottom }]}>
      <AppTouchable
        title="Start breathing exercise"
        onPress={startBreathingExercise}
        containerStyle={styles.primary}
        textStyle={styles.primaryText}
      />
      <Pressable onPress={startOver} accessibilityRole="button">
        <AppText style={styles.link}>Start over</AppText>
      </Pressable>
    </AppView>
  );
}
