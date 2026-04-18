import { AppView } from "@/components/AppView";
import { colors } from "@/constants/colors";
import { useStyles } from "@/hooks/use-styles";
import React from "react";

import { BREATHING_DOT_ACTIVE, BREATHING_DOT_IDLE } from "./constants";
import { createStyles } from "./styles";

type Props = {
  totalRounds: number;
  currentRound: number;
  started: boolean;
  done: boolean;
};

export default function CycleDots({
  totalRounds,
  currentRound,
  started,
  done,
}: Props) {
  const styles = useStyles(createStyles);
  return (
    <AppView style={styles.dotsRow}>
      {Array.from({ length: totalRounds }).map((_, i) => (
        <AppView
          key={i}
          style={[
            styles.dot,
            {
              backgroundColor: done
                ? colors.blue
                : i < currentRound
                  ? colors.blue
                  : i === currentRound && started
                    ? BREATHING_DOT_ACTIVE
                    : BREATHING_DOT_IDLE,
              transform: [
                { scale: i === currentRound && started && !done ? 1.3 : 1 },
              ],
            },
          ]}
        />
      ))}
    </AppView>
  );
}
