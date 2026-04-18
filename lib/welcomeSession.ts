import AsyncStorage from "@react-native-async-storage/async-storage";

const WELCOME_COMPLETED_KEY = "@flycalm/welcome_completed";

export async function hasCompletedWelcome(): Promise<boolean> {
  try {
    const value = await AsyncStorage.getItem(WELCOME_COMPLETED_KEY);
    return value === "true";
  } catch {
    return false;
  }
}

export async function setWelcomeCompleted(): Promise<void> {
  try {
    await AsyncStorage.setItem(WELCOME_COMPLETED_KEY, "true");
  } catch {}
}
