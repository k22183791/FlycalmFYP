import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import { colors } from "@/constants/colors";
import { useStyles } from "@/hooks/use-styles";
import React from "react";
import Svg, { Circle } from "react-native-svg";

import { BREATHING_RING_CIRC } from "./constants";
import { createStyles } from "./styles";

type Props = {
  strokeColor: string;
  arcOffset: number;
  countdown: string;
};

export default function RingTimer({
  strokeColor,
  arcOffset,
  countdown,
}: Props) {
  const styles = useStyles(createStyles);
  return (
    <AppView style={styles.ringWrap}>
      <Svg width={60} height={60} viewBox="0 0 60 60" style={styles.ringSvg}>
        <Circle
          fill="none"
          stroke={colors.borderSlate}
          strokeWidth={5}
          cx={30}
          cy={30}
          r={24}
        />
        <Circle
          fill="none"
          stroke={strokeColor}
          strokeWidth={5}
          strokeLinecap="round"
          cx={30}
          cy={30}
          r={24}
          strokeDasharray={`${BREATHING_RING_CIRC}`}
          strokeDashoffset={`${arcOffset}`}
        />
      </Svg>
      <AppView style={styles.countdownWrap}>
        <AppText style={styles.countdownText} weight="bold">
          {countdown}
        </AppText>
      </AppView>
    </AppView>
  );
}
