import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import { useStyles } from "@/hooks/use-styles";
import type { FlightWeatherBriefingState } from "@/hooks/useFlightWeatherBriefing";
import React from "react";
import { ActivityIndicator, Pressable } from "react-native";

import type { AppColors } from "@/constants/colors";
import { useAppColors } from "@/hooks/useAppColors";
import type { PirepTurbulenceLevel } from "@/lib/flightWeatherBriefing";
import { turbulenceUiCopy } from "@/lib/pirepPlainLanguage";
import { createHomeSurfaceCard } from "../surfaceStyles";
import { createStyles } from "./styles";

export type TurbulenceStatusCardProps = {
  state: FlightWeatherBriefingState;
  onAdd?: () => void;
  onRetry?: () => void;
};

function turbulencePillColors(level: PirepTurbulenceLevel, colors: AppColors) {
  switch (level) {
    case "none":
      return { bg: colors.calmHintBg, fg: colors.turbulenceLow };
    case "light":
      return { bg: colors.warmAccentBg, fg: colors.turbulenceMed };
    case "moderate":
      return { bg: "#ffedd5", fg: colors.turbulenceHigh };
    case "severe":
      return { bg: "#fee2e2", fg: "#b91c1c" };
  }
}

export default function TurbulenceStatusCard({
  state,
  onAdd,
  onRetry,
}: TurbulenceStatusCardProps) {
  const surface = useStyles(createHomeSurfaceCard);
  const styles = useStyles(createStyles);
  const palette = useAppColors();

  const title = "Turbulence";

  const subtitle =
    state.status === "ready"
      ? "A gentle guess at how the air might feel near your trip — not a forecast."
      : state.status === "loading"
        ? "One moment…"
        : state.status === "error"
          ? "Something went wrong."
          : state.status === "incomplete"
            ? "Add your departure and arrival to personalize this summary."
            : "Save your trip to see a simple bump hint.";

  const level = state.status === "ready" ? state.briefing.pirepLevel : null;
  const copy = level ? turbulenceUiCopy(level) : null;
  const a11yLabel = copy
    ? `${copy.pillLabel}. ${copy.bumpsDescription} ${copy.comfortNote}`
    : undefined;

  return (
    <AppView style={surface.root}>
      <AppText style={styles.cardTitle} weight="bold">
        {title}
      </AppText>
      <AppText style={styles.cardSubtitle}>{subtitle}</AppText>

      {state.status === "loading" ? (
        <AppView style={styles.loadingRow}>
          <ActivityIndicator />
        </AppView>
      ) : null}

      {copy && level ? (
        <AppView
          style={styles.statsBlock}
          accessible
          accessibilityLabel={a11yLabel}
        >
          <AppView
            style={[
              styles.statsLevelPill,
              {
                alignSelf: "flex-start",
                backgroundColor: turbulencePillColors(level, palette).bg,
              },
            ]}
          >
            <AppText
              style={[
                styles.statsLevelText,
                { color: turbulencePillColors(level, palette).fg },
              ]}
            >
              {copy.pillLabel}
            </AppText>
          </AppView>
          <AppText style={styles.bumpsParagraph}>
            {copy.bumpsDescription}
          </AppText>
          <AppText style={styles.comfortParagraph}>{copy.comfortNote}</AppText>
        </AppView>
      ) : null}

      {state.status === "error" ? (
        <AppText style={styles.timelineLine}>{state.message}</AppText>
      ) : null}

      {state.status === "error" && onRetry ? (
        <Pressable
          onPress={onRetry}
          accessibilityRole="button"
          accessibilityLabel="Try loading again"
        >
          <AppText style={styles.addFlightLink} weight="bold">
            Try again
          </AppText>
        </Pressable>
      ) : null}

      {onAdd ? (
        <Pressable
          onPress={onAdd}
          accessibilityRole="link"
          accessibilityLabel="Update your trip details"
        >
          <AppText style={styles.addFlightLink} weight="bold">
            {state.status === "empty" || state.status === "idle"
              ? "Add your trip →"
              : "Update your trip →"}
          </AppText>
        </Pressable>
      ) : null}
    </AppView>
  );
}
