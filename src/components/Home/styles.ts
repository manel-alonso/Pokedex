import { StyleProp, ViewStyle } from "react-native";

export const HOME_STYLE: StyleProp<ViewStyle> = {
  flex: 1,
  backgroundColor: "rgb(211 76 76)",
  alignItems: "center",
  justifyContent: "center",
  rowGap: 20,
  paddingTop: 20,
  paddingBottom: 20,
  height: window.innerHeight,
};

export const LIST_STYLE: StyleProp<ViewStyle> = {
  width: "100%",
};

export const FAV_LIST_STYLE: StyleProp<ViewStyle> = {
  width: "100%",
  height: "50%",
};
