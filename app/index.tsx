import { hasCompletedWelcome } from "@/lib/welcomeSession";
import { Redirect, type Href } from "expo-router";
import React, { useEffect, useState } from "react";

export default function Index() {
  const [href, setHref] = useState<Href | null>(null);

  useEffect(() => {
    let cancelled = false;
    hasCompletedWelcome().then((done) => {
      if (!cancelled) {
        setHref(done ? "/(tabs)/home" : "/welcome");
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (href == null) {
    return null;
  }

  return <Redirect href={href} />;
}
