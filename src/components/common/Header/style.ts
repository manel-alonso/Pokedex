import { StyleProp, TextStyle, ViewStyle } from "react-native";

export const HEADER_STYLE: StyleProp<ViewStyle> = {
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "row",
};

export const SEARCH_STYLE: StyleProp<TextStyle> = {
  width: "90%",
  height: 50,
  borderRadius: 10,
  borderStyle: "solid",
  borderWidth: 2,
  padding: 10,
  fontSize: 18,
  backgroundColor: "white",
};
