import Image from "next/image";
import { useEffect, useState } from "react";
import screenTop from "../../../public/screen-top.png";
import screenBottom from "../../../public/screen-bottom.png";
import driveEmpty from "../../../public/drive-empty.png";
import driveFull from "../../../public/drive-full.png";
import hq from "../../../public/hq.png";
import power from "../../../public/power.png";
import bleep from "../../../public/bleep.png";
import Screen from "../Screen";
import DiskInfo from "../DiskInfo";
import { useAccount, useContractRead, useDisconnect } from "wagmi";
import { Web3Button } from "@web3modal/react";
import { abi } from "../../utils/disks.abi";

const Terminal = () => {
  const { address, isConnected } = useAccount();

  const { data } = useContractRead({
    address: "0xeac5619d35d4db69e9dfbdab3687fc3cfecf095d",
    abi: abi,
    functionName: "balanceOf",
    args: [address, 1],
  });

  const { disconnect } = useDisconnect();

  const [isDiskHolder, setIsDiskHolder] = useState(false);

  useEffect(() => {
    if (data?.toString() === "1") {
      setIsDiskHolder(true);
    }
  }, [data]);

  return (
    <>
      <div className="flex flex-col items-center bg-[#cccccc]">
        <Image src={screenTop} alt="" className="h-[55px]" />
        <div className="relative grow">
          <div className="flex justify-center">
            {isDiskHolder ? (
              <Screen />
            ) : (
              <div className="flex flex-col">
                <DiskInfo />
                {isConnected ? (
                  <button onClick={() => disconnect()}>Sign out</button>
                ) : (
                  <Web3Button
                    icon="show"
                    label="Connect Wallet"
                    balance="show"
                  />
                )}
              </div>
            )}
          </div>
        </div>
        <Image
          src={screenBottom}
          alt=""
          className="h-[132px] overflow-hidden"
        />
      </div>
      <div className="flex flex-col bg-[#dfd6c1] pb-12">
        <Image src={hq} alt="" className="h-[50px] w-[91px] self-center" />
        <Image
          src={bleep}
          className=" self-left float-none ml-12 h-[130px] w-[106px]"
          alt=""
        />
      </div>
      <div className="relative bg-[#dfd6c1]">
        <div
          className="cursor-pointer"
          onClick={() => setIsDiskHolder(!isDiskHolder)}
        >
          <Image
            src={isDiskHolder ? driveFull : driveEmpty}
            className="float-right h-[76px] w-[333px] cursor-pointer pl-4 pt-2"
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => disconnect()}>
          <Image
            src={power}
            className="float-left h-[78px] w-[228px] pr-4 pt-2"
            alt=""
          />
        </div>
        <div className="clear-both"> </div>
      </div>
    </>
  );
};

export default Terminal;
