import "@/styles/globals.css";
import { HeladeriaProvider } from "@/context/HeladeriaProvider";

export default function App({ Component, pageProps }) {
  return (
    <HeladeriaProvider>
      <Component {...pageProps} />
    </HeladeriaProvider>
  );
}
