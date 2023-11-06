export const setup = () => {
  jest.mock("@expo/vector-icons", () => ({
    FontAwesome: "",
  }));
};
