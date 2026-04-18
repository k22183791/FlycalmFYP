import BreathingExercise from "@/screens/BreathingExercise";
import { useLocalSearchParams } from "expo-router";
import React from "react";

export default function BreathingTechniqueRoute() {
  const { technique } = useLocalSearchParams<{ technique: string }>();
  const id = Array.isArray(technique) ? technique[0] : technique;

  return <BreathingExercise technique={id} />;
}
