import { FontAwesome } from "@expo/vector-icons";
import { Modal, View, Image, SafeAreaView } from "react-native";
import { Stat } from "../Stat/Stat";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";
import { PokemonDetails } from "../../../api/types/pokemons";
import {
  DETAILS_STYLE,
  DETAILS_CLOSE_STYLE,
  DETAILS_BACKGROUND_STYLE,
  DETAILS_IMAGE_STYLE,
  DETAILS_TEXT_STYLE,
  DETAILS_STATS,
  DETAILS_IMAGES_STYLE,
  DETAILS_IMAGES_INFO_STYLE,
  MODAL_STYLE,
} from "./style";

interface PokemonDetailProps {
  isVisible: boolean;
  onClose: () => void;
  details: PokemonDetails;
  name: string;
}

export const PokemonDetail = (props: PokemonDetailProps) => {
  const { isVisible, onClose, details, name } = props;

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <SafeAreaView style={MODAL_STYLE}>
        <View style={DETAILS_STYLE}>
          <View>
            <FontAwesome
              style={DETAILS_CLOSE_STYLE}
              name="close"
              size={24}
              color="white"
              onPress={onClose}
            />
            <Image
              style={DETAILS_BACKGROUND_STYLE}
              source={require("./assets/detail_bg.webp")}
            />
            <Image
              style={DETAILS_IMAGE_STYLE}
              source={{ uri: details?.image }}
            />
            <View style={DETAILS_TEXT_STYLE}>
              <Title text={name} />
              <Subtitle text="Stats" />
              <View style={DETAILS_STATS}>
                {details?.stats.map((stat, index) => (
                  <Stat
                    key={`${stat.name}-${index}`}
                    name={stat.name}
                    value={stat.value}
                  />
                ))}
              </View>
              <Subtitle text="Images" />
              <View style={DETAILS_IMAGES_STYLE}>
                {details?.images.map((image, index) => (
                  <Image
                    style={DETAILS_IMAGES_INFO_STYLE}
                    key={`${image}-${index}`}
                    source={{ uri: image }}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
