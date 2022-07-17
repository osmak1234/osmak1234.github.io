import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { customTheme } from "../styles/theme";

const theme = customTheme;

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
