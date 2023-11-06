import { Text } from "react-native";
import { TITLE_STYLE } from "./style";

interface TitleProps {
  text: string;
}

export const Title = (props: TitleProps) => {
  const { text } = props;

  return <Text style={TITLE_STYLE}>{text}</Text>
};