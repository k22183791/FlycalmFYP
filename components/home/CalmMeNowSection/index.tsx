import { useStyles } from "@/hooks/use-styles";
import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import AppTouchable from "@/components/AppTouchable";
import { router } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { createStyles } from "./styles";

export default function CalmMeNowSection() {
  const styles = useStyles(createStyles);
  const insets = useSafeAreaInsets();

  return (
    <AppView style={[styles.wrap, { paddingBottom: 16 + insets.bottom }]}>
      <Pressable onPress={() => router.replace("/(tabs)/calm")}>
        <AppText style={styles.calmMeLabel}>Calm Me Now</AppText>
      </Pressable>
      <AppTouchable
        title="Things Feel Bumpy Right Now"
        onPress={() => router.push("/checkin")}
        containerStyle={styles.primaryCta}
        textStyle={styles.primaryCtaText}
      />
    </AppView>
  );
}
