import { StyleProp, ViewStyle, ImageStyle, TextStyle } from "react-native";

export const MODAL_STYLE: StyleProp<ViewStyle> = {
  backgroundColor: "rgb(211 76 76)",
};

export const DETAILS_STYLE: StyleProp<ViewStyle> = {
  backgroundColor: "rgb(211 76 76)",
  height: "100%",
  width: "100%",
};

export const DETAILS_IMAGE_STYLE: StyleProp<ImageStyle> = {
  width: "50%",
  height: 190,
  alignSelf: "center",
};

export const DETAILS_CLOSE_STYLE: StyleProp<TextStyle> = {
  position: "absolute",
  left: 15,
  top: 15,
  fontSize: 40,
};

export const DETAILS_BACKGROUND_STYLE: StyleProp<ImageStyle> = {
  height: 200,
  position: "absolute",
  top: "0%",
  width: "100%",
  zIndex: -1,
};

export const DETAILS_TEXT_STYLE: StyleProp<ViewStyle> = {
  display: "flex",
  flexDirection: "column",
  rowGap: 15,
  padding: 20,
};

export const DETAILS_STATS: StyleProp<ViewStyle> = {
  display: "flex",
  flexWrap: "wrap",
};

export const DETAILS_IMAGES_STYLE: StyleProp<ImageStyle> = {
  height: "50%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
};

export const DETAILS_IMAGES_INFO_STYLE: StyleProp<ImageStyle> = {
  height: 100,
  width: 100,
};
