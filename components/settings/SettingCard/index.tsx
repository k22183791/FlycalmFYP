import { useStyles } from "@/hooks/use-styles";
import { AppView } from "@/components/AppView";
import React, { PropsWithChildren } from "react";
import { StyleProp, ViewStyle } from "react-native";

import { createStyles } from "./styles";

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export default function SettingCard({ children, style }: Props) {
  const styles = useStyles(createStyles);
  return <AppView style={[styles.card, style]}>{children}</AppView>;
}
