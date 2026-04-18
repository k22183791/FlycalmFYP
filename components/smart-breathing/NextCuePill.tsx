import { useStyles } from "@/hooks/use-styles";
import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import React from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { createStyles } from "./styles";

type Props = {
  text: string;
  visible: boolean;
};

export default function NextCuePill({ text, visible }: Props) {
  const styles = useStyles(createStyles);
  return (
    <AppView style={styles.cuePillWrap}>
      {visible && (
        <Animated.View
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(200)}
          style={styles.cuePill}
        >
          <AppText style={styles.cuePillText}>{text}</AppText>
        </Animated.View>
      )}
    </AppView>
  );
}
