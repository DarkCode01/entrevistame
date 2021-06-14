import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import GlobalStyles from "../components/globalStyles";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
