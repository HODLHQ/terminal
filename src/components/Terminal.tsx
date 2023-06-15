import type { PropsWithChildren } from "react";
import MiniTerminal from "./MiniTerminal";
import Room from "./Room";
import { useRouter } from "next/router";
import useHODLHQ from "../hooks/useHODLHQ";

const Terminal = (props: PropsWithChildren) => {
  const { isDiskHolder } = useHODLHQ();
  const router = useRouter();

  if (router.route.startsWith("/members") && !isDiskHolder) {
    void router.push("/");
  } else if (isDiskHolder && router.route === "/") {
    void router.push("/members/clone");
  }
  return (
    <div className="h-screen w-screen">
      <div className="block md:hidden">
        <MiniTerminal>{props.children}</MiniTerminal>
      </div>
      <div className="hidden md:block">
        <Room>{props.children}</Room>
      </div>
    </div>
  );
};

export default Terminal;
