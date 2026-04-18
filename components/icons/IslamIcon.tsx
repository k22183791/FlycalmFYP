import { colors } from "@/constants/colors";
import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = { size?: number; color?: string };

export default function IslamIcon({
  size = 22,
  color = colors.textGray700,
}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.82 0 3.53-.49 5-1.35A8 8 0 0 1 6.5 12 8 8 0 0 1 17 4.07 9.96 9.96 0 0 0 12 2Z"
        fill={color}
      />
      <Path
        d="M16.5 8l1.18 2.36 2.6.38-1.88 1.84.44 2.6-2.34-1.23-2.34 1.23.44-2.6-1.88-1.84 2.6-.38z"
        fill={color}
      />
    </Svg>
  );
}
