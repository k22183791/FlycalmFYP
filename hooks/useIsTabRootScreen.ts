import { useSegments } from "expo-router";

export function useIsTabRootScreen() {
  const segments = useSegments();
  return segments[0] === "(tabs)" && segments.length === 2;
}
