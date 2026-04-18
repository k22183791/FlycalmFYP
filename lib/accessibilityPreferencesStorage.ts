import type { TextSizeOption } from "@/constants/textSize";
import { DEFAULT_TEXT_SIZE, parseTextSize } from "@/constants/textSize";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HIGH_CONTRAST_KEY = "@flycalm/high_contrast";
const TEXT_SIZE_KEY = "@flycalm/text_size";

export async function loadHighContrast(): Promise<boolean> {
  try {
    return (await AsyncStorage.getItem(HIGH_CONTRAST_KEY)) === "true";
  } catch {
    return false;
  }
}

export async function saveHighContrast(value: boolean): Promise<void> {
  try {
    await AsyncStorage.setItem(HIGH_CONTRAST_KEY, value ? "true" : "false");
  } catch {}
}

export async function loadTextSize(): Promise<TextSizeOption> {
  try {
    return parseTextSize(await AsyncStorage.getItem(TEXT_SIZE_KEY));
  } catch {
    return DEFAULT_TEXT_SIZE;
  }
}

export async function saveTextSize(value: TextSizeOption): Promise<void> {
  try {
    await AsyncStorage.setItem(TEXT_SIZE_KEY, value);
  } catch {}
}
