import type { AppColors } from "@/constants/colors";
import { useMemo } from "react";

import { useAppColors } from "./useAppColors";

/**
 * Builds styles from the active palette (including high contrast).
 * Pass a stable module-level function that calls `StyleSheet.create` internally.
 */
export function useStyles<T>(factory: (colors: AppColors) => T): T {
  const colors = useAppColors();
  return useMemo(() => factory(colors), [colors, factory]);
}
