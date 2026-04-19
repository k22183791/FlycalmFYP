import type { TextSizeOption } from "@/constants/textSize";
import { DEFAULT_TEXT_SIZE, textSizeToScale } from "@/constants/textSize";
import {
  loadHighContrast,
  loadTextSize,
  saveHighContrast,
  saveTextSize,
} from "@/lib/accessibilityPreferencesStorage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type AccessibilityPreferencesContextValue = {
  highContrast: boolean;
  setHighContrast: (value: boolean) => Promise<void>;
  textSize: TextSizeOption;
  setTextSize: (value: TextSizeOption) => Promise<void>;
  textScale: number;
  ready: boolean;
  /** Call after clearing AsyncStorage so UI matches default persisted values. */
  resetPreferencesToDefaults: () => void;
};

const AccessibilityPreferencesContext =
  createContext<AccessibilityPreferencesContextValue | null>(null);

export function AccessibilityPreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [highContrast, setHighContrastState] = useState(false);
  const [textSize, setTextSizeState] =
    useState<TextSizeOption>(DEFAULT_TEXT_SIZE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    Promise.all([loadHighContrast(), loadTextSize()]).then(([hc, ts]) => {
      if (!cancelled) {
        setHighContrastState(hc);
        setTextSizeState(ts);
        setReady(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const setHighContrast = useCallback(async (value: boolean) => {
    setHighContrastState(value);
    await saveHighContrast(value);
  }, []);

  const setTextSize = useCallback(async (value: TextSizeOption) => {
    setTextSizeState(value);
    await saveTextSize(value);
  }, []);

  const resetPreferencesToDefaults = useCallback(() => {
    setHighContrastState(false);
    setTextSizeState(DEFAULT_TEXT_SIZE);
  }, []);

  const textScale = useMemo(() => textSizeToScale(textSize), [textSize]);

  const value = useMemo(
    () => ({
      highContrast,
      setHighContrast,
      textSize,
      setTextSize,
      textScale,
      ready,
      resetPreferencesToDefaults,
    }),
    [
      highContrast,
      setHighContrast,
      textSize,
      setTextSize,
      textScale,
      ready,
      resetPreferencesToDefaults,
    ],
  );

  return (
    <AccessibilityPreferencesContext.Provider value={value}>
      {children}
    </AccessibilityPreferencesContext.Provider>
  );
}

export function useAccessibilityPreferences(): AccessibilityPreferencesContextValue {
  const ctx = useContext(AccessibilityPreferencesContext);
  if (ctx == null) {
    throw new Error(
      "useAccessibilityPreferences must be used within AccessibilityPreferencesProvider",
    );
  }
  return ctx;
}
