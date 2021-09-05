import type { AppProps } from "next/app";
import Navigation from "../components/navigation";
import Header from "../components/header";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <div id="content">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default App;
