import { useStyles } from "@/hooks/use-styles";
import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import HinduIcon from "@/components/icons/HinduIcon";
import IslamIcon from "@/components/icons/IslamIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

import { colors } from "@/constants/colors";
import { createStyles } from "./styles";

const ICON_SIZE = 22;
const ICON_COLOR = colors.textGray700;

const FAITHS = [
  {
    label: "Islam",
    icon: <IslamIcon size={ICON_SIZE} color={ICON_COLOR} />,
    quote: '"Indeed, with hardship comes ease."',
    source: "— Quran 94:5",
  },
  {
    label: "Christian",
    icon: (
      <MaterialCommunityIcons
        name="cross"
        size={ICON_SIZE}
        color={ICON_COLOR}
      />
    ),
    quote: '"Be still and know that I am God."',
    source: "— Psalm 46:10",
  },
  {
    label: "Hindu",
    icon: <HinduIcon size={ICON_SIZE} color={ICON_COLOR} />,
    quote: '"Prana — the breath — is the bridge between body and soul."',
    source: "— Upanishads",
  },
];

export default function FaithGrid() {
  const styles = useStyles(createStyles);
  return (
    <AppView style={styles.grid}>
      {FAITHS.map((f) => (
        <AppView key={f.label} style={styles.card}>
          <AppView style={styles.icon}>{f.icon}</AppView>
          <AppText style={styles.faithLabel} weight="bold">
            {f.label}
          </AppText>
          <AppText style={styles.quote} weight="italic">
            {f.quote}
          </AppText>
          <AppText style={styles.source}>{f.source}</AppText>
        </AppView>
      ))}
    </AppView>
  );
}
