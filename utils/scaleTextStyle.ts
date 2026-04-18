import type { TextStyle } from "react-native";

export function scaleTextStyle(
  style: TextStyle | undefined,
  factor: number,
): TextStyle | undefined {
  if (style == null || factor === 1) {
    return style;
  }
  const next: TextStyle = { ...style };
  if (typeof next.fontSize === "number") {
    next.fontSize = Math.round(next.fontSize * factor * 100) / 100;
  }
  if (typeof next.lineHeight === "number") {
    next.lineHeight = Math.round(next.lineHeight * factor * 100) / 100;
  }
  return next;
}
