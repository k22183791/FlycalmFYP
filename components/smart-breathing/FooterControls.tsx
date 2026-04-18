import AppTouchable from "@/components/AppTouchable";
import { AppView } from "@/components/AppView";
import { useStyles } from "@/hooks/use-styles";
import React from "react";

import { createStyles } from "./styles";

type Props = {
  started: boolean;
  paused: boolean;
  bottomInset: number;
  onToggleRun: () => void;
  onEnd: () => void;
};

export default function FooterControls({
  started,
  paused,
  bottomInset,
  onToggleRun,
  onEnd,
}: Props) {
  const styles = useStyles(createStyles);
  return (
    <AppView style={[styles.controls, { paddingBottom: 16 + bottomInset }]}>
      {!started ? (
        <AppTouchable
          title="Start"
          onPress={onToggleRun}
          containerStyle={styles.startBtn}
          textStyle={styles.startBtnText}
        />
      ) : (
        <AppView style={styles.controlRow}>
          <AppTouchable
            title={paused ? "Resume" : "Pause"}
            onPress={onToggleRun}
            containerStyle={styles.pauseBtn}
            textStyle={styles.pauseBtnText}
          />
          <AppTouchable
            title="End"
            onPress={onEnd}
            containerStyle={styles.endBtn}
            textStyle={styles.endBtnText}
          />
        </AppView>
      )}
    </AppView>
  );
}
