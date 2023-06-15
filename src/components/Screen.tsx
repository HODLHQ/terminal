import type { PropsWithChildren } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { Web3Button } from "@web3modal/react";
import DiskMintInfo from "./DiskMintInfo";
import useHODLHQ from "../hooks/useHODLHQ";

const Screen = (props: PropsWithChildren) => {
  const { isDiskHolder } = useHODLHQ();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="relative grow">
      <div className="flex justify-center">
        {isDiskHolder ? (
          <div>{props.children}</div>
        ) : (
          <div className="flex flex-col">
            {isConnected ? (
              <button onClick={() => disconnect()}>Sign out</button>
            ) : (
              <Web3Button icon="show" label="Connect Wallet" balance="show" />
            )}
            <DiskMintInfo />
          </div>
        )}
      </div>
    </div>
  );
};
export default Screen;
