import Image from "next/image";
import driveEmpty from "../../public/drive-empty.png";
import driveFull from "../../public/drive-full.png";
import hq from "../../public/hq.png";
import power from "../../public/power.png";
import bleep from "../../public/bleep.png";
import { useAccount, useDisconnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { useRouter } from "next/router";
import useHODLHQ from "../hooks/useHODLHQ";

const Peripherals = () => {
  const { isDiskHolder } = useHODLHQ();
  const router = useRouter();
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();

  if (router.route.startsWith("/members") && !isDiskHolder) {
    void router.push("/");
  }
  return (
    <>
      <div className="flex flex-col bg-[#dfd6c1] pb-12">
        <Image src={hq} alt="" className="h-[50px] w-[91px] self-center" />
        <Image
          src={bleep}
          className=" self-left float-none ml-12 h-[130px] w-[106px]"
          alt=""
        />
      </div>
      <div className="relative bg-[#dfd6c1]">
        <Image
          src={isDiskHolder ? driveFull : driveEmpty}
          className="float-right h-[76px] w-[333px] cursor-pointer pl-4 pt-2"
          alt=""
        />
        <div
          className="cursor-pointer"
          onClick={() => {
            if (isConnected) {
              disconnect();
              if (router.route.startsWith("/members")) {
                void router.push("/");
              }
            } else {
              void open();
            }
          }}
        >
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
export default Peripherals;
