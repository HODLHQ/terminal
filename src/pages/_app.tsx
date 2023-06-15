import { type AppType } from "next/dist/shared/lib/utils";
import { Schoolbell } from "@next/font/google";
import { useEffect, useState } from "react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, mainnet, WagmiConfig } from "wagmi";
import "../styles/globals.css";
import Terminal from "../components/Terminal";

if (!process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID) {
  throw new Error(
    "You need to provide NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID env variable"
  );
}
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

const { chains, provider } = configureChains(
  [mainnet],
  [w3mProvider({ projectId })]
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

const schoolbell = Schoolbell({
  subsets: ["latin"],
  weight: ["400"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <WagmiConfig client={wagmiClient}>
          <main className={schoolbell.className}>
            <Terminal>
              <Component {...pageProps} />
            </Terminal>
          </main>
        </WagmiConfig>
      ) : null}
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default MyApp;
