import Image from "next/image";
import type { PropsWithChildren } from "react";
import screenTop from "../../public/screen-top.png";
import screenBottom from "../../public/screen-bottom.png";
import Peripherals from "./Peripherals";
import Screen from "./Screen";

const MiniTerminal = (props: PropsWithChildren) => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center bg-[#cccccc]">
        <Image src={screenTop} alt="" className="h-[55px]" />
        <Screen>{props.children}</Screen>
        <Image
          src={screenBottom}
          alt=""
          className="h-[132px] overflow-hidden"
        />
      </div>
      <Peripherals />
    </div>
  );
};
export default MiniTerminal;
