import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "./theme";

function ThemeProvider({ children }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  );
}

export { ThemeProvider };
