import type { AppProps } from "next/app";
import Navigation from "../components/navigation";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}
export default App;
