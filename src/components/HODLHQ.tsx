import type { PropsWithChildren } from "react";
import Desk from "./Desk";
import Poster from "./Poster";
import Mug from "./Mug";
import Screen from "./Screen";
import Desktop from "./Desktop";

const Room = (props: PropsWithChildren) => {
  return (
    <div className="h-screen w-screen">
      <div className="md:hidden">
        <Screen>{props.children}</Screen>
      </div>
      <div className="hidden md:block">
        <div className="relative z-0 flex h-screen flex-col items-center justify-center bg-[#fefae1]">
          <Desk />
          <Poster />
          <div className="mx-auto max-w-3xl bg-[#cccccc] ">
            <div className="block">
              <Desktop>
                <Screen>{props.children}</Screen>
              </Desktop>
            </div>
            <div className="relative z-0 flex h-screen flex-col items-center justify-center bg-[#fefae1]">
              <div
                className="absolute inset-x-0 bottom-0 z-10 h-1/6 max-h-[346px] w-[100%] overflow-hidden bg-repeat-x"
                style={{ backgroundImage: "url(/desk.png)" }}
              >
                {" "}
              </div>
            </div>
          </div>
          <Mug />
        </div>
      </div>
    </div>
  );
};

export default Room;
