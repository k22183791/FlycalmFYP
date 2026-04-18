import { AppText } from "@/components/AppText";
import Icons from "@/components/ui/Icons";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

type Props = {
  onPress?: () => void;
};

export default function ScreenBackLink({ onPress }: Props) {
  return (
    <Pressable onPress={onPress ?? (() => router.back())} style={styles.row}>
      <Icons
        family="Ionicons"
        name="arrow-back"
        size={20}
        color={Colors.light.black}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: Colors.light.black,
  },
});
