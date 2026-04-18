import AppLayout from "@/components/AppLayout";
import CalmMeNowSection from "@/components/home/CalmMeNowSection";
import HomeHeader from "@/components/home/HomeHeader";
import RecommendationCard from "@/components/home/RecommendationCard";
import TurbulenceStatusCard from "@/components/home/TurbulenceStatusCard";
import ScreenBackLink from "@/components/ui/ScreenBackLink";
import { useFlightWeatherBriefing } from "@/hooks/useFlightWeatherBriefing";
import { useIsTabRootScreen } from "@/hooks/useIsTabRootScreen";
import { router } from "expo-router";
import React from "react";
import Animated, { FadeInUp } from "react-native-reanimated";

const ENTRANCE_MS = 420;
const TITLE_DELAY = 90;
const STAGGER_MS = 95;

export default function Home() {
  const { state, refresh } = useFlightWeatherBriefing();
  const isTabRoot = useIsTabRootScreen();

  return (
    <AppLayout
      header={
        <>
          {!isTabRoot ? <ScreenBackLink /> : null}
          <HomeHeader />
        </>
      }
    >
      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(TITLE_DELAY)}
      >
        <TurbulenceStatusCard
          state={state}
          onAdd={() => router.push("/flight-setup")}
          onRetry={refresh}
        />
      </Animated.View>
      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(
          TITLE_DELAY + STAGGER_MS,
        )}
      >
        <RecommendationCard briefingState={state} />
      </Animated.View>
      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(
          TITLE_DELAY + STAGGER_MS * 2,
        )}
      >
        <CalmMeNowSection />
      </Animated.View>
    </AppLayout>
  );
}
