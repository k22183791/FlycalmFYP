import { colors } from "@/constants/colors";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";
import React from "react";

import { TextStyle, ViewStyle } from "react-native";

export type IconFamily =
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "FontAwesome"
  | "FontAwesome5"
  | "Fontisto"
  | "Foundation"
  | "Ionicons"
  | "MaterialCommunityIcons"
  | "MaterialIcons"
  | "Octicons"
  | "SimpleLineIcons"
  | "Zocial";

type IconsProps = {
  family: IconFamily;
  name: string;
  size?: number;
  color?: string;
  style?: TextStyle | ViewStyle;
  [key: string]: any; // allow any extra props like `onPress`, etc.
};

const Icons: React.FC<IconsProps> = ({
  family,
  name,
  color = colors.black,
  size = 14,
  ...props
}) => {
  const IconComponent = (() => {
    switch (family) {
      case "AntDesign":
        return AntDesign;
      case "Entypo":
        return Entypo;
      case "EvilIcons":
        return EvilIcons;
      case "Feather":
        return Feather;
      case "FontAwesome":
        return FontAwesome;
      case "FontAwesome5":
        return FontAwesome5;
      case "Fontisto":
        return Fontisto;
      case "Foundation":
        return Foundation;
      case "Ionicons":
        return Ionicons;
      case "MaterialCommunityIcons":
        return MaterialCommunityIcons;
      case "MaterialIcons":
        return MaterialIcons;
      case "Octicons":
        return Octicons;
      case "SimpleLineIcons":
        return SimpleLineIcons;
      case "Zocial":
        return Zocial;
      default:
        return Ionicons;
    }
  })();

  return (
    <IconComponent
      name={name || "help-outline"}
      color={color}
      size={size}
      {...props}
    />
  );
};

export default Icons;
