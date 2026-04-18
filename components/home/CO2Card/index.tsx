import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import { colors } from "@/constants/colors";
import React from "react";
import { StyleSheet } from "react-native";

export default function CO2Card() {
  return (
    <AppView style={s.card}>
      <AppText style={s.text}>
        Cabin CO₂ is 4–6× higher than outdoors. A long nasal exhale actively
        flushes this and resets your nervous system.
      </AppText>
    </AppView>
  );
}

const s = StyleSheet.create({
  card: {
    borderRadius: 14,
    padding: 16,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 13,
    fontStyle: "italic",
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
