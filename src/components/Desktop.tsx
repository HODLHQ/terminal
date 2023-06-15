import Image from "next/image";
import type { PropsWithChildren } from "react";
import bezelLeft from "../../public/bezel-left.png";
import bezelRight from "../../public/bezel-right.png";
import screenLeft from "../../public/screen-left.png";
import screenRight from "../../public/screen-right.png";
import screenTop from "../../public/screen-top.png";
import screenBottom from "../../public/screen-bottom.png";
import Screen from "./Screen";
import Peripherals from "./Peripherals";

const Desktop = (props: PropsWithChildren) => {
  return (
    <div className="z-20 flex flex-row justify-center md:container">
      <div className="flex flex-row">
        <Image src={bezelLeft} alt="" className="h-full max-w-[40px]" />
      </div>
      <div className="w-[88px] bg-[#dfd6c1]"> </div>
      <div className="flex grow flex-col bg-[#dfd6c1] pt-[8px]">
        <div className="flex flex-row justify-center">
          <div className="max-w-[35px] bg-[#cccccc]">
            <Image src={screenLeft} alt="" className="h-full" />
          </div>
          <div className="flex flex-col items-stretch bg-[#cccccc]">
            <Image
              src={screenTop}
              alt=""
              className="h-[55px] overflow-hidden"
            />
            <Screen>{props.children}</Screen>
            <Image
              src={screenBottom}
              alt=""
              className="h-[132px] overflow-hidden"
            />
          </div>
          <div className="max-w-[35px] bg-[#cccccc]">
            <Image src={screenRight} alt="" className="h-full max-w-[35px]" />
          </div>
        </div>
        <Peripherals />
      </div>
      <div className="w-[88px] bg-[#dfd6c1]"> </div>
      <div className="flex flex-row">
        <Image
          src={bezelRight}
          className="invisible h-full max-w-[40px] md:visible"
          alt=""
        />
      </div>
    </div>
  );
};

export default Desktop;
