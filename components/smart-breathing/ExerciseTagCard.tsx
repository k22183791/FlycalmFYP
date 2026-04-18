import { useStyles } from "@/hooks/use-styles";
import { AppText } from "@/components/AppText";
import React from "react";
import Animated, { FadeInUp } from "react-native-reanimated";

import { createStyles } from "./styles";

type Props = {
  tag: string;
  name: string;
};

export default function ExerciseTagCard({ tag, name }: Props) {
  const styles = useStyles(createStyles);
  return (
    <Animated.View
      entering={FadeInUp.duration(400).delay(80)}
      style={styles.tagCard}
    >
      <AppText style={styles.tagEyebrow}>{tag}</AppText>
      <AppText style={styles.tagName} weight="bold">
        {name}
      </AppText>
    </Animated.View>
  );
}
