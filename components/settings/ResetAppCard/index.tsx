import { AppText } from "@/components/AppText";
import SettingCard from "@/components/settings/SettingCard";
import { useAccessibilityPreferences } from "@/contexts/AccessibilityPreferencesContext";
import { useStyles } from "@/hooks/use-styles";
import { useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { Alert, Pressable } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStyles } from "./styles";

type Props = {
  onPress?: () => void;
};

export default function ResetAppCard({ onPress }: Props) {
  const styles = useStyles(createStyles);
  const router = useRouter();
  const { resetPreferencesToDefaults } = useAccessibilityPreferences();
  const [busy, setBusy] = useState(false);

  const runReset = useCallback(async () => {
    if (busy) return;
    setBusy(true);
    try {
      await AsyncStorage.clear();
      resetPreferencesToDefaults();
      router.replace("/welcome");
    } finally {
      setBusy(false);
    }
  }, [busy, resetPreferencesToDefaults, router]);

  const handlePress = useCallback(() => {
    Alert.alert(
      "Reset app",
      "This removes all saved data on this device and returns you to the welcome screen.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Reset",
          style: "destructive",
          onPress: () => {
            onPress?.();
            void runReset();
          },
        },
      ],
    );
  }, [onPress, runReset]);

  return (
    <SettingCard>
      <Pressable
        onPress={handlePress}
        disabled={busy}
        style={styles.pressable}
        accessibilityRole="button"
        accessibilityLabel="Reset app"
        accessibilityState={{ disabled: busy }}
      >
        <AppText style={styles.label} weight="bold">
          Reset App
        </AppText>
      </Pressable>
    </SettingCard>
  );
}
