# FlyCalm

A mobile application for managing flight anxiety through evidence-based breathing techniques, grounding exercises, and reassurance content. Built as a Final Year Project at Kingston University.

---

## Overview

FlyCalm helps passengers manage flight anxiety by guiding them through breathing and grounding interventions tailored to their current symptoms and flight phase. The app is fully offline - no internet connection or account is required.

The exercise recommendations are informed by published research on CO₂ regulation and respiratory physiology. Elevated cabin CO₂ levels are associated with increased anxiety symptoms; slow, controlled breathing techniques counteract this by reducing CO₂ sensitivity. This science is embedded in the educational content and the rationale provided for each exercise.

---

## Features

- 14 screens across a tab bar and intervention stack
- Symptom and flight phase check-in that routes users to appropriate exercises
- Breathing technique timer with haptic feedback
- Grounding techniques and reassurance content
- One-time Welcome screen on first launch (controlled via AsyncStorage)
- Fully offline - no network requests, no backend, no user accounts
- Persistent state managed locally via AsyncStorage

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native + Expo Router |
| Language | TypeScript |
| Animations | react-native-reanimated |
| Haptics | expo-haptics |
| Visuals | expo-linear-gradient, react-native-svg |
| Storage | @react-native-async-storage/async-storage |
| UI | react-native-safe-area-context, react-native-keyboard-aware-scroll-view |
| Icons & Fonts | @expo/vector-icons, expo-font |

---

## Project Structure

```
app/                  Expo Router screens and tab layout
components/           Reusable UI components
screens/              Screen-level components
contexts/             React context providers
hooks/                Custom hooks
lib/                  Breathing routes and exercise logic
utils/                Utility functions
constants/            App-wide constants
assets/               Fonts and images
```

---

## Getting Started

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go on Android.

> **Note:** Currently tested and verified on Android only. iOS compatibility has not been confirmed.

---

## Platforms

- Android (tested and verified)
- iOS (not tested)

---

## Usability Testing

The app was evaluated through usability testing with participants drawn from the target user group. Participants were asked to navigate the app independently and complete a breathing exercise from start to finish. Results were assessed using the System Usability Scale (SUS).

---

## Academic Context

**Module:** Final Year Project  
**Institution:** Kingston University London  
**Year:** 2025–2026  

The respiratory science underpinning the exercise selection is documented in the project dissertation, drawing on published academic literature on cabin environment physiology and anxiety management techniques.

---

## License

Academic project. Not licensed for commercial use.
