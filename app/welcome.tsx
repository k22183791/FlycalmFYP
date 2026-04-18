import { hasCompletedWelcome } from "@/lib/welcomeSession";
import WelcomeScreen from "@/screens/Welcome";
import { Redirect } from "expo-router";
import React, { useEffect, useState } from "react";

export default function Welcome() {
  const [ready, setReady] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let cancelled = false;
    hasCompletedWelcome().then((done) => {
      if (!cancelled) {
        setCompleted(done);
        setReady(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) {
    return null;
  }

  if (completed) {
    return <Redirect href="/(tabs)/home" />;
  }

  return <WelcomeScreen />;
}
