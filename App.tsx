import { SafeAreaView, StyleProp, ViewStyle } from "react-native";
import { Home } from "./src/components/Home/Home";

const INITIAL_STYLE: StyleProp<ViewStyle> = {
  width: '100%',
  height: '100%',
  backgroundColor: 'rgb(211 76 76)',
}

export default function App() {
  return (
    <SafeAreaView style={INITIAL_STYLE}>
      <Home />
    </SafeAreaView>
  );
}
