import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

export const TOUCHABLE_STYLE: StyleProp<ViewStyle> = {
  width: "90%",
  borderRadius: 10,
  marginLeft: "5%",
  marginRight: "5%",
  marginBottom: 10,
};

export const POKEMON_STYLE: StyleProp<ViewStyle> = {
  backgroundColor: "#fff",
  height: 60,
  width: "100%",
  display: "flex",
  alignItems: "center",
  borderColor: "black",
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  columnGap: 10,
  flexDirection: "row",
};

export const POKEMON_NAME_STYLE: StyleProp<TextStyle> = {
  fontSize: 20,
  textTransform: "capitalize",
};

export const POKEMON_FAV_STYLE: StyleProp<TextStyle> = {
  position: 'absolute',
  right: 20,
  fontSize: 24,
};

export const POKEMON_NUMBER_STYLE: StyleProp<TextStyle> = {
  ...POKEMON_NAME_STYLE,
  marginLeft: 20,
};

export const POKEMON_IMAGE_STYLE: StyleProp<ImageStyle> = {
  height: "100%",
  width: "20%",
};
