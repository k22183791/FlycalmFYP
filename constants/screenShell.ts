import type { AppColors } from "@/constants/colors";

export function getScreenShellGradient(colors: AppColors) {
  return [colors.skyLight, colors.white] as const;
}
