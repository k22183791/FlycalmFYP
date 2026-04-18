import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import SettingCard from "@/components/settings/SettingCard";
import { useStyles } from "@/hooks/use-styles";
import React from "react";
import { Pressable } from "react-native";

import type { TextSizeOption } from "@/constants/textSize";
import { createStyles } from "./styles";

type Props = {
  value: TextSizeOption;
  onChange: (next: TextSizeOption) => void;
};

const OPTIONS: { key: TextSizeOption; label: string }[] = [
  { key: "small", label: "Small" },
  { key: "medium", label: "Medium" },
  { key: "large", label: "Large" },
];

export default function TextSizeSelector({ value, onChange }: Props) {
  const styles = useStyles(createStyles);
  return (
    <SettingCard>
      <AppText style={styles.title} weight="bold">
        Text Size
      </AppText>
      <AppView style={styles.row}>
        {OPTIONS.map(({ key, label }) => {
          const active = value === key;
          return (
            <Pressable
              key={key}
              onPress={() => onChange(key)}
              style={[styles.segment, active && styles.segmentActive]}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
            >
              <AppText
                style={[
                  styles.segmentLabel,
                  active && styles.segmentLabelActive,
                ]}
                weight="bold"
              >
                {label}
              </AppText>
            </Pressable>
          );
        })}
      </AppView>
    </SettingCard>
  );
}
