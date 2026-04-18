import { getScreenShellGradient } from "@/constants/screenShell";
import { useAppColors } from "@/hooks/useAppColors";
import { LinearGradient } from "expo-linear-gradient";
import React, { PropsWithChildren, ReactNode } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppView } from "@/components/AppView";

type Props = PropsWithChildren<{
  header?: ReactNode;
  footer?: ReactNode;
  scrollContentContainerStyle?: StyleProp<ViewStyle>;
}>;

export default function AppLayout({
  header,
  footer,
  children,
  scrollContentContainerStyle,
}: Props) {
  const palette = useAppColors();
  const shellGradient = getScreenShellGradient(palette);

  return (
    <LinearGradient
      colors={[...shellGradient]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.inner}>
          {header && <View style={styles.header}>{header}</View>}

          <KeyboardAwareScrollView
            style={styles.scroll}
            contentContainerStyle={[
              styles.content,
              scrollContentContainerStyle,
            ]}
            enableOnAndroid
            extraScrollHeight={80}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            nestedScrollEnabled
            scrollEventThrottle={16}
            bounces
            enableResetScrollToCoords={false}
            showsVerticalScrollIndicator={false}
          >
            <AppView style={styles.scrollInner}>{children}</AppView>
          </KeyboardAwareScrollView>

          {footer && <View style={styles.footer}>{footer}</View>}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "transparent",
  },

  inner: {
    flex: 1,
  },

  header: {
    width: "100%",
    zIndex: 10,
  },

  scroll: {
    flex: 1,
    backgroundColor: "transparent",
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },

  scrollInner: {
    flexGrow: 1,
    flex: 1,
    width: "100%",
  },

  footer: {
    width: "100%",
    backgroundColor: "transparent",
  },
});
