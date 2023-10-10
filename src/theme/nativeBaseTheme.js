import { extendTheme } from "native-base";
import { darkTheme } from "./colors";

const nativebaseTheme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  colors: {
    primary: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: `${darkTheme.textColor}`,
      },
    },
    Text: {
      baseStyle: {
        color: `${darkTheme.textColor}`,
      },
    },
  },
  fontConfig: {
    PlusJakartaSans: {
      100: {
        normal: "PlusJakartaSans-light",
        italic: "PlusJakartaSans-light",
      },
      200: {
        normal: "PlusJakartaSans-light",
        italic: "PlusJakartaSans-light",
      },
      300: {
        normal: "PlusJakartaSans-light",
        italic: "PlusJakartaSans-light",
      },
      400: {
        normal: "PlusJakartaSans-regular",
        italic: "PlusJakartaSans-regular",
      },
      500: {
        normal: "PlusJakartaSans-regular",
        italic: "PlusJakartaSans-regular",
      },
      600: {
        normal: "PlusJakartaSans-medium",
        italic: "PlusJakartaSans-medium",
      },
      700: {
        normal: "PlusJakartaSans-semibold",
        italic: "PlusJakartaSans-semibold",
      },
      800: {
        normal: "PlusJakartaSans-bold",
        italic: "PlusJakartaSans-bold",
      },
      900: {
        normal: "PlusJakartaSans-extrabold",
        italic: "PlusJakartaSans-extrabold",
      },
    },
  },
  fonts: {
    heading: "PlusJakartaSans",
    body: "PlusJakartaSans",
    mono: "PlusJakartaSans",
  },
});

export default nativebaseTheme;
