import type { PropsWithChildren } from "react";
import Image from "next/image";
import Desktop from "./Desktop";
import poster from "../../public/poster.png";
import coffee from "../../public/coffee.png";

const Room = (props: PropsWithChildren) => {
  return (
    <>
      <div className="relative z-0 flex h-screen flex-col items-center justify-center overflow-hidden bg-[#fefae1]">
        <div
          className="absolute inset-x-0 bottom-0 z-10 h-1/6 max-h-[346px] w-[100%] bg-repeat-x"
          style={{ backgroundImage: "url(/desk.png)" }}
        >
          {" "}
        </div>
        <Image
          src={poster}
          alt=""
          className="max-h-1/2 absolute top-0 right-0 z-10 float-right h-1/2 object-contain object-right"
        />
        <div className="z-20 mx-auto max-w-3xl">
          <div className="block">
            <Desktop>{props.children}</Desktop>
          </div>
        </div>
        <Image
          src={coffee}
          alt=""
          className="invisible absolute bottom-0 left-0 z-30 float-left h-1/5 object-contain object-left md:visible"
        />
      </div>
    </>
  );
};
export default Room;
