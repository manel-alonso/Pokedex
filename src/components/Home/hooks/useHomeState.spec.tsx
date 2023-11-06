import React from "react";
import { renderHook, act, waitFor } from "@testing-library/react-native";
import { useHomeState } from "./useHomeState";
import { getPokemons } from "../../../api/pokemons";

jest.mock("../../../api/pokemons", () => ({
  getPokemons: jest.fn(),
}));
jest.mock("@expo/vector-icons", () => ({
  FontAwesome: "",
}));

describe("useHomeState custom hook", () => {
  it("should fetch and set initial pokemons", async () => {
    const mockPokemons = {
      results: [{ name: "pokemon1" }, { name: "pokemon2" }],
      next: "nextPageUrl",
    };

    (getPokemons as jest.Mock).mockResolvedValue(mockPokemons);

    const { result } = renderHook(() => useHomeState());

    await waitFor(() => {
      expect(result.current.results).toEqual(mockPokemons.results);
      expect(result.current.loading).toBe(false);
    });
  });

  it("should handle favorite toggling correctly", async () => {
    const { result } = renderHook(() => useHomeState());

    act(() => {
      result.current.handleFavourite({ name: "pokemon1", url: "" });
    });

    await waitFor(() => {
      expect(result.current.favourites).toEqual([{ name: "pokemon1", url: "" }]);
    });

    act(() => {
      result.current.handleFavourite({ name: "pokemon1", url: "" });
    });

    await waitFor(() => {
      expect(result.current.favourites).toEqual([]);
    });
  });

  it("should fetch and append next page pokemons", async () => {
    const mockPokemonsPage1 = {
      results: [{ name: "pokemon1" }, { name: "pokemon2" }],
      next: "nextPageUrl",
    };

    const mockPokemonsPage2 = {
      results: [{ name: "pokemon3" }, { name: "pokemon4" }],
      next: "",
    };

    (getPokemons as jest.Mock).mockResolvedValueOnce(mockPokemonsPage1);

    const { result } = renderHook(() => useHomeState());

    await waitFor(() => {
      expect(result.current.results).toEqual(mockPokemonsPage1.results);
    });

    act(() => {
      (getPokemons as jest.Mock).mockResolvedValueOnce(mockPokemonsPage2);
      result.current.gatherNextPage();
    });

    await waitFor(() => {
      expect(result.current.results).toEqual([
        ...mockPokemonsPage1.results,
        ...mockPokemonsPage2.results,
      ]);
    });
  });
});
