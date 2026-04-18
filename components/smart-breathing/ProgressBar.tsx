import { useStyles } from "@/hooks/use-styles";
import { AppView } from "@/components/AppView";
import React from "react";

import { createStyles } from "./styles";

type Props = {
  widthPercent: number;
  color: string;
};

export default function ProgressBar({ widthPercent, color }: Props) {
  const styles = useStyles(createStyles);
  return (
    <AppView style={styles.barOuter}>
      <AppView
        style={[
          styles.barInner,
          { width: `${widthPercent}%`, backgroundColor: color },
        ]}
      />
    </AppView>
  );
}
