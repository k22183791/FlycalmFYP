import AppTouchable from "@/components/AppTouchable";
import { AppView } from "@/components/AppView";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  /** First-run welcome: run before navigating (e.g. persist AsyncStorage). */
  onWillNavigate?: () => void | Promise<void>;
};

export default function HomeFooterButtons({ onWillNavigate }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <AppView style={[s.wrap, { paddingBottom: 16 + insets.bottom }]}>
      <AppTouchable
        title="Flight Info"
        onPress={async () => {
          await onWillNavigate?.();
          router.push("/flight-setup");
        }}
        containerStyle={s.outline}
        textStyle={s.outlineText}
      />
      <AppTouchable
        title="Calm Me Now"
        onPress={async () => {
          await onWillNavigate?.();
          router.replace("/(tabs)/calm");
        }}
        containerStyle={s.primary}
        textStyle={s.primaryText}
      />
    </AppView>
  );
}

const s = StyleSheet.create({
  wrap: {
    gap: 12,
    marginTop: 16,
  },
  outline: {
    minHeight: 54,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.blue,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  outlineText: {
    fontSize: 16,
    color: colors.blue,
  },
  primary: {
    minHeight: 54,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: {
    fontSize: 16,
    color: colors.white,
  },
});
