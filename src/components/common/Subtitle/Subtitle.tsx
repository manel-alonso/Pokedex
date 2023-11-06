import { Text } from "react-native";
import { SUBTITLE_STYLE } from "./style";

interface TitleProps {
  text: string;
}

export const Subtitle = (props: TitleProps) => {
  const { text } = props;

  return <Text style={SUBTITLE_STYLE}>{text}</Text>
};