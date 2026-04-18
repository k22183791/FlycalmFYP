import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import SettingCard from "@/components/settings/SettingCard";
import { useStyles } from "@/hooks/use-styles";
import { useAppColors } from "@/hooks/useAppColors";
import React from "react";
import { Switch } from "react-native";

import { createStyles } from "./styles";

type Props = {
  title: string;
  description: string;
  value: boolean;
  onValueChange: (next: boolean) => void;
};

export default function SettingToggleItem({
  title,
  description,
  value,
  onValueChange,
}: Props) {
  const colors = useAppColors();
  const styles = useStyles(createStyles);
  return (
    <SettingCard>
      <AppView style={styles.row}>
        <AppView style={styles.textBlock}>
          <AppText style={styles.title} weight="bold">
            {title}
          </AppText>
          <AppText style={styles.description}>{description}</AppText>
        </AppView>
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: colors.borderSlate, true: colors.primary }}
          thumbColor={colors.white}
          ios_backgroundColor={colors.borderSlate}
        />
      </AppView>
    </SettingCard>
  );
}
