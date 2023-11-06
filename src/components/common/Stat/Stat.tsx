import { useMemo } from "react";
import { NAME_STYLE } from "./style";
import { Text } from "react-native";

interface StatProps {
  name: string;
  value: number;
}

export const Stat = (props: StatProps) => {
  const { name, value } = props;

  const formattedName = name.split('-').join(' ').replace('special', 'sp.');

  return <Text style={NAME_STYLE}>{formattedName}: {value}</Text>;
};
