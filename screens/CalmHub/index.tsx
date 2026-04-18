import { useStyles } from "@/hooks/use-styles";
import AppLayout from "@/components/AppLayout";
import CalmActionButtons from "@/components/calm/CalmActionButtons";
import CalmHeader from "@/components/calm/CalmHeader";
import BreathingOrb from "@/components/calm/BreathingOrb";
import { AppView } from "@/components/AppView";
import ScreenBackLink from "@/components/ui/ScreenBackLink";
import { useIsTabRootScreen } from "@/hooks/useIsTabRootScreen";
import React from "react";
import { useWindowDimensions } from "react-native";

import { createStyles } from "./styles";

export default function CalmHub() {
  const styles = useStyles(createStyles);
  const isTabRoot = useIsTabRootScreen();
  const { height } = useWindowDimensions();
  const mainMinHeight = Math.max(380, height * 0.48);

  return (
    <AppLayout
      header={
        !isTabRoot ? (
          <>
            <ScreenBackLink />
          </>
        ) : undefined
      }
    >
      <AppView style={[styles.main, { minHeight: mainMinHeight }]}>
        <CalmHeader />
        <AppView style={styles.orbSlot}>
          <BreathingOrb />
        </AppView>
        <CalmActionButtons />
      </AppView>
    </AppLayout>
  );
}
