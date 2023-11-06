import React from "react";
import { render, screen } from "@testing-library/react-native";
import App from "./App";
import { setup } from "./jestSetup";

jest.mock("@expo/vector-icons", () => ({
  FontAwesome: "",
}));

jest.mock("./src/api/pokemons", () => ({
  getPokemons: jest.fn(() => Promise.resolve("")),
  getPokemonDetail: jest.fn(() => Promise.resolve("")),
}));

describe("App component", () => {
  it("should render the component", async () => {
    render(<App />);
    expect(await screen.findByText('Pokédex'))
  });
});
