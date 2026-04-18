import { useStyles } from "@/hooks/use-styles";
import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import SettingCard from "@/components/settings/SettingCard";
import React from "react";

import { createStyles } from "./styles";

type Props = {
  isActive?: boolean;
};

export default function OfflineModeCard({ isActive = true }: Props) {
  const styles = useStyles(createStyles);
  return (
    <SettingCard>
      <AppView style={styles.row}>
        <AppView style={styles.textBlock}>
          <AppText style={styles.title} weight="bold">
            Offline Mode
          </AppText>
          <AppText style={styles.description}>
            All features work without internet
          </AppText>
        </AppView>
        {isActive ? (
          <AppView style={styles.statusRow}>
            <AppView style={styles.dot} />
            <AppText style={styles.statusLabel}>Active</AppText>
          </AppView>
        ) : null}
      </AppView>
    </SettingCard>
  );
}
