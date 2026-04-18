import AppLayout from "@/components/AppLayout";
import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import OfflineModeCard from "@/components/settings/OfflineModeCard";
import ResetAppCard from "@/components/settings/ResetAppCard";
import SettingToggleItem from "@/components/settings/SettingToggleItem";
import TextSizeSelector from "@/components/settings/TextSizeSelector";
import { useAccessibilityPreferences } from "@/contexts/AccessibilityPreferencesContext";
import { useStyles } from "@/hooks/use-styles";
import React from "react";
import Animated, { FadeInUp } from "react-native-reanimated";

import { createStyles } from "./styles";

const ENTRANCE_MS = 500;
const STAGGER_MS = 80;

export default function Settings() {
  const styles = useStyles(createStyles);
  const { highContrast, setHighContrast, textSize, setTextSize } =
    useAccessibilityPreferences();

  return (
    <AppLayout
      header={
        <AppView style={styles.headerBlock}>
          <AppText style={styles.title} weight="bold">
            Settings
          </AppText>
          <AppText style={styles.subtitle}>
            Tune how Flycalm feels on your device.
          </AppText>
        </AppView>
      }
    >
      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(STAGGER_MS * 2)}
      >
        <SettingToggleItem
          title="High Contrast Mode"
          description="Increases contrast for readability"
          value={highContrast}
          onValueChange={setHighContrast}
        />
      </Animated.View>

      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(STAGGER_MS * 4)}
      >
        <TextSizeSelector
          value={textSize}
          onChange={(next) => {
            void setTextSize(next);
          }}
        />
      </Animated.View>

      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(STAGGER_MS * 5)}
      >
        <OfflineModeCard isActive />
      </Animated.View>

      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(STAGGER_MS * 6)}
      >
        <ResetAppCard />
      </Animated.View>
    </AppLayout>
  );
}
