export type TextSizeOption = "small" | "medium" | "large";

export const DEFAULT_TEXT_SIZE: TextSizeOption = "medium";

/** Multiplier applied to fontSize / lineHeight (AppText and scaled inputs). */
export const TEXT_SIZE_SCALE: Record<TextSizeOption, number> = {
  small: 0.88,
  medium: 1,
  large: 1.18,
};

export function parseTextSize(raw: string | null): TextSizeOption {
  if (raw === "small" || raw === "medium" || raw === "large") {
    return raw;
  }
  return DEFAULT_TEXT_SIZE;
}

export function textSizeToScale(option: TextSizeOption): number {
  return TEXT_SIZE_SCALE[option];
}
