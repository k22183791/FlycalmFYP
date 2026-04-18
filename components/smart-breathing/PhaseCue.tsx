import { useStyles } from "@/hooks/use-styles";
import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import React from "react";

import { createStyles } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

export default function PhaseCue({ title, subtitle }: Props) {
  const styles = useStyles(createStyles);
  return (
    <AppView style={styles.bigWordWrap}>
      <AppText style={styles.bigWord} weight="bold">
        {title}
      </AppText>
      <AppText style={styles.subWord}>{subtitle}</AppText>
    </AppView>
  );
}
