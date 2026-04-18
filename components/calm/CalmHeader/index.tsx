import { useStyles } from "@/hooks/use-styles";
import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import React from "react";

import { createStyles } from "./styles";

export default function CalmHeader() {
  const styles = useStyles(createStyles);
  return (
    <AppView>
      <AppText style={styles.title} weight="bold">
        You&apos;re Safe
      </AppText>
      <AppText style={styles.subtitle}>
        Your body is just reacting to the movement. This will rise and fall.
      </AppText>
    </AppView>
  );
}
