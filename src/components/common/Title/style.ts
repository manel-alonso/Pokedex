import { StyleProp, TextStyle } from "react-native";

export const TITLE_STYLE: StyleProp<TextStyle> = {
  fontSize: 40,
  fontWeight: "bold",
  textTransform: "uppercase",
  textShadowColor: "black",
  textShadowOffset: { width: 3, height: 2 },
  textShadowRadius: 1,
  color: 'white',
  textAlign: 'center',
};
