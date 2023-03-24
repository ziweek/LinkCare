import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { RecoilRoot } from "recoil";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#0975F4",
      activated: "#0975F4",
      inactivated: "#C3D3E5",
      // primary: "#4DA758",
      secondary: "$black",
    }, // optional
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "#0975F4",
      activated: "#0975F4",
      inactivated: "#C3D3E5",
      secondary: "#2E2162",
    }, // optional
  },
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className,
          }}
        >
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        </NextThemesProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}
