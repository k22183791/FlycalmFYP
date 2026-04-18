import { useStyles } from "@/hooks/use-styles";
import { AppText } from "@/components/AppText";
import SettingCard from "@/components/settings/SettingCard";
import React from "react";
import { Pressable } from "react-native";

import { createStyles } from "./styles";

type Props = {
  onPress?: () => void;
};

export default function ResetAppCard({ onPress }: Props) {
  const styles = useStyles(createStyles);
  return (
    <SettingCard>
      <Pressable
        onPress={onPress}
        style={styles.pressable}
        accessibilityRole="button"
        accessibilityLabel="Reset app"
      >
        <AppText style={styles.label} weight="bold">
          Reset App
        </AppText>
      </Pressable>
    </SettingCard>
  );
}
