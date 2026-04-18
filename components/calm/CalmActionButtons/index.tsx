import { useStyles } from "@/hooks/use-styles";
import AppTouchable from "@/components/AppTouchable";
import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import { router } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { createStyles } from "./styles";

export default function CalmActionButtons() {
  const styles = useStyles(createStyles);
  const insets = useSafeAreaInsets();

  return (
    <AppView style={[styles.wrap, { paddingBottom: 12 + insets.bottom }]}>
      <AppTouchable
        title="Start Breathing Exercise"
        onPress={() => router.push("/checkin")}
        containerStyle={styles.primary}
        textStyle={styles.primaryText}
      />
      <AppTouchable
        title="Grounding Exercise"
        onPress={() => router.push("/grounding")}
        containerStyle={styles.secondary}
        textStyle={styles.secondaryText}
      />
      <Pressable
        onPress={() => router.push("/reassurance")}
        accessibilityRole="link"
        accessibilityLabel="I Need Reassurance"
      >
        <AppText style={styles.reassuranceLink} weight="bold">
          I Need Reassurance
        </AppText>
      </Pressable>
    </AppView>
  );
}
