import React from "react";
import { View, FlatList } from "react-native";
import { FAV_LIST_STYLE, HOME_STYLE, LIST_STYLE } from "./styles";
import { Header } from "../common/Header/Header";
import { useHomeState } from "./hooks/useHomeState";

export const Home = () => {
  const { favourites, renderItem, gatherNextPage, results, loading } =
    useHomeState();

  return (
    <View style={HOME_STYLE}>
      <Header />
      {favourites.length > 0 ? (
        <FlatList
          style={FAV_LIST_STYLE}
          data={favourites}
          renderItem={renderItem}
          onEndReached={gatherNextPage}
          initialNumToRender={50}
        />
      ) : null}

      {!loading ? (
        <FlatList
          style={LIST_STYLE}
          data={results}
          renderItem={renderItem}
          onEndReached={gatherNextPage}
          initialNumToRender={50}
        />
      ) : null}
    </View>
  );
};
