import { Dimensions } from "react-native";
import {
  moderateScale as ms,
  scale as s,
  verticalScale as vs,
} from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

export const responsive = {
  width,
  height,
  scale: s,
  verticalScale: vs,
  moderateScale: ms,
};

export const spacing = {
  xs: ms(4),
  sm: ms(8),
  md: ms(12),
  lg: ms(16),
  xl: ms(24),
  xxl: ms(32),
};

export const fontSize = (size: number) => ms(size);
