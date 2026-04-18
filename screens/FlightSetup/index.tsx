import AppLayout from "@/components/AppLayout";
import { AppText } from "@/components/AppText";
import AppTouchable from "@/components/AppTouchable";
import { AppView } from "@/components/AppView";
import ScreenBackLink from "@/components/ui/ScreenBackLink";
import Icons from "@/components/ui/Icons";
import { colors } from "@/constants/colors";
import { useStyles } from "@/hooks/use-styles";
import { sanitizeAirportCodeInput } from "@/lib/aviationWeatherGov";
import {
  getStoredFlightInfo,
  setStoredFlightInfo,
} from "@/lib/flightInfoStorage";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, TextInput } from "react-native";

import { createStyles } from "./styles";

export default function FlightSetup() {
  const styles = useStyles(createStyles);
  const [flightNumber, setFlightNumber] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const s = await getStoredFlightInfo();
      if (!s) return;
      setFlightNumber(s.flightNumber);
      setDepartureAirport(s.departureAirport);
      setArrivalAirport(s.arrivalAirport);
    })();
  }, []);

  const goToTabsHome = () => {
    router.replace("/home");
  };

  const goToHome = async () => {
    const depCode = sanitizeAirportCodeInput(departureAirport);
    const arrCode = sanitizeAirportCodeInput(arrivalAirport);
    if (!depCode || !arrCode) {
      setFormError(
        "Enter a 3–4 letter airport code (e.g. JFK or KJFK). You can add a city in parentheses — it will be ignored.",
      );
      return;
    }
    setFormError(null);
    await setStoredFlightInfo({
      flightNumber: flightNumber.trim(),
      departureAirport: depCode,
      arrivalAirport: arrCode,
      savedAtIso: new Date().toISOString(),
    });
    router.replace("/home-dashboard");
  };

  return (
    <AppLayout
      header={<ScreenBackLink />}
      footer={
        <AppView style={styles.footer}>
          {formError ? (
            <AppText style={styles.formError}>{formError}</AppText>
          ) : null}
          <AppTouchable
            title="Continue"
            onPress={() => void goToHome()}
            containerStyle={styles.continueBtn}
            textStyle={styles.continueText}
          />
          <Pressable onPress={goToTabsHome} accessibilityRole="button">
            <AppText style={styles.skipText}>Skip — Manual Mode</AppText>
          </Pressable>
        </AppView>
      }
    >
      <AppView style={styles.headBlock}>
        <AppText style={styles.screenTitle} weight="bold">
          Flight Information
        </AppText>
        <AppText style={styles.screenSubtitle}>
          We use recent conditions near your departure and arrival to shape the
          bump hint on Home.
        </AppText>
      </AppView>

      <AppView style={styles.fieldCard}>
        <AppView style={styles.fieldLabelRow}>
          <FontAwesome5 name="hashtag" size={14} color={colors.primary} />
          <AppText style={styles.fieldLabel}>Flight number (optional)</AppText>
        </AppView>
        <TextInput
          style={styles.flightInput}
          placeholder="Not used for turbulence stats"
          placeholderTextColor={colors.textMuted}
          value={flightNumber}
          onChangeText={setFlightNumber}
          autoCapitalize="characters"
          autoCorrect={false}
        />
      </AppView>

      <AppView style={styles.fieldCard}>
        <AppView style={styles.fieldLabelRow}>
          <Icons
            family="Feather"
            name="navigation"
            size={16}
            color={colors.primary}
          />
          <AppText style={styles.fieldLabel}>Departure airport</AppText>
        </AppView>
        <TextInput
          style={styles.flightInput}
          placeholder="JFK or JFK (New York)"
          placeholderTextColor={colors.textMuted}
          value={departureAirport}
          onChangeText={setDepartureAirport}
          autoCapitalize="characters"
          autoCorrect={false}
        />
      </AppView>

      <AppView style={styles.fieldCard}>
        <AppView style={styles.fieldLabelRow}>
          <Icons
            family="Feather"
            name="map-pin"
            size={16}
            color={colors.primary}
          />
          <AppText style={styles.fieldLabel}>Arrival airport</AppText>
        </AppView>
        <TextInput
          style={styles.flightInput}
          placeholder="LAX or LAX (Los Angeles)"
          placeholderTextColor={colors.textMuted}
          value={arrivalAirport}
          onChangeText={setArrivalAirport}
          autoCapitalize="characters"
          autoCorrect={false}
        />
      </AppView>

      <AppView style={styles.infoBox}>
        <AppText style={styles.infoTitle}>Why flight details matter</AppText>
        <AppText style={styles.infoBody}>
          Reports are voluntary and spotty. A calm summary does not guarantee a
          perfectly smooth ride, and a bumpy summary is not a map of your exact
          path — only a rough clue from the areas you enter.
        </AppText>
      </AppView>
    </AppLayout>
  );
}
