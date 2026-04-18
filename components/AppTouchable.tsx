import { colors } from "@/constants/colors";
import React from "react";
import {
  ActivityIndicator,
  ColorValue,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  TextProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import { AppText } from "./AppText";

type Props = {
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;

  containerStyle?: ViewStyle | any;
  textStyle?: TextStyle;

  disabled?: boolean;
  loading?: boolean;

  indicatorColor?: ColorValue;

  children?: React.ReactNode;

  /** When using `title`, limits lines (e.g. 1 + ellipsizeMode for tight flex buttons). */
  numberOfLines?: number;
  ellipsizeMode?: TextProps["ellipsizeMode"];
};

export default function AppTouchable({
  title,
  onPress,
  containerStyle,
  textStyle,
  disabled = false,
  loading = false,
  indicatorColor = "white",
  children,
  numberOfLines,
  ellipsizeMode,
}: Props) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.container,
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        containerStyle,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={indicatorColor} />
      ) : children ? (
        children
      ) : (
        <AppText
          style={[styles.text, textStyle]}
          weight="semibold"
          numberOfLines={numberOfLines}
          ellipsizeMode={ellipsizeMode}
        >
          {title}
        </AppText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  pressed: {
    opacity: 0.7,
  },

  disabled: {
    opacity: 0.5,
  },
});
