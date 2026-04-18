import { colors } from "@/constants/colors";
import { useAccessibilityPreferences } from "@/contexts/AccessibilityPreferencesContext";
import { useThemeColor } from "@/hooks/use-theme-color";
import { getFontFamily, type FontWeight } from "@/utils/fonts";
import { fontSize } from "@/utils/responsive";
import { scaleTextStyle } from "@/utils/scaleTextStyle";
import { StyleSheet, Text, TextProps } from "react-native";

export type AppTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  weight?: FontWeight;
};

export function AppText({
  style,
  lightColor,
  darkColor,
  type = "default",
  weight,
  ...rest
}: AppTextProps) {
  const { textScale } = useAccessibilityPreferences();
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  let fontFamily = getFontFamily("regular");
  if (weight) {
    fontFamily = getFontFamily(weight);
  } else if (type === "defaultSemiBold") {
    fontFamily = getFontFamily("medium");
  } else if (type === "title" || type === "subtitle") {
    fontFamily = getFontFamily("bold");
  }

  const typeStyle =
    type === "default"
      ? styles.default
      : type === "title"
        ? styles.title
        : type === "defaultSemiBold"
          ? styles.defaultSemiBold
          : type === "subtitle"
            ? styles.subtitle
            : type === "link"
              ? styles.link
              : undefined;

  const merged = StyleSheet.flatten([{ color, fontFamily }, typeStyle, style]);

  return <Text style={scaleTextStyle(merged, textScale)} {...rest} />;
}

const styles = StyleSheet.create({
  default: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
  },
  defaultSemiBold: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
  },
  title: {
    fontSize: fontSize(32),
    lineHeight: fontSize(32),
  },
  subtitle: {
    fontSize: fontSize(20),
  },
  link: {
    fontSize: fontSize(16),
    lineHeight: fontSize(30),
    color: colors.primary,
  },
});
