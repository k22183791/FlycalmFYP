import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useSafeInsets = () => {
  const insets = useSafeAreaInsets();

  const top = insets.top || 0;
  const bottom = insets.bottom || 0;
  const left = insets.left || 0;
  const right = insets.right || 0;

  return { top, bottom, left, right };
};
