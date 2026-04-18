import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import { useStyles } from "@/hooks/use-styles";
import React from "react";

import { createStyles } from "./styles";

type Props = {
  /** Context line from the matched exercise (`ex.info`), like the web info pill. */
  info: string;
};

export default function SafeQuoteCard({ info }: Props) {
  const styles = useStyles(createStyles);

  return (
    <AppView style={styles.card}>
      <AppText style={styles.text}>{info}</AppText>
    </AppView>
  );
}
