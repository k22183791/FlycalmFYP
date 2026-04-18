import { colors } from "@/constants/colors";
import React from "react";
import Svg, { Circle } from "react-native-svg";

type Props = { size?: number; color?: string };

export default function HinduIcon({
  size = 22,
  color = colors.textGray700,
}: Props) {
  const sw = 1.6;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={10} stroke={color} strokeWidth={sw} />
      <Circle cx={12} cy={12} r={5.5} stroke={color} strokeWidth={sw} />
    </Svg>
  );
}
