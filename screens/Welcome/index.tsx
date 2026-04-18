import AppLayout from "@/components/AppLayout";
import CO2Card from "@/components/home/CO2Card";
import FacingFearCard from "@/components/home/FacingFearCard";
import FaithGrid from "@/components/home/FaithGrid";
import HomeFooterButtons from "@/components/home/HomeFooterButtons";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import { setWelcomeCompleted } from "@/lib/welcomeSession";
import React from "react";
import { StyleSheet } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const ENTRANCE_MS = 420;
const TITLE_DELAY = 90;
const STAGGER_MS = 95;

function d(i: number) {
  return TITLE_DELAY + STAGGER_MS * i;
}

export default function WelcomeScreen() {
  return (
    <AppLayout>
      <Animated.View entering={FadeInUp.duration(ENTRANCE_MS).delay(d(0))}>
        <HomeHeroSection />
      </Animated.View>

      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(d(1))}
        style={s.section}
      >
        <FacingFearCard />
      </Animated.View>

      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(d(2))}
        style={s.section}
      >
        <FaithGrid />
      </Animated.View>

      <Animated.View
        entering={FadeInUp.duration(ENTRANCE_MS).delay(d(3))}
        style={s.section}
      >
        <CO2Card />
      </Animated.View>

      <Animated.View entering={FadeInUp.duration(ENTRANCE_MS).delay(d(4))}>
        <HomeFooterButtons onWillNavigate={setWelcomeCompleted} />
      </Animated.View>
    </AppLayout>
  );
}

const s = StyleSheet.create({
  section: {
    marginTop: 20,
  },
});
