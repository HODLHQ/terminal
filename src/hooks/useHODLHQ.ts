import { useAccount, useContractRead } from "wagmi";
import { abi } from "../utils/disks.abi";

const useHODLHQ = () => {
  const { address } = useAccount();

  const { data } = useContractRead({
    address: "0xeac5619d35d4db69e9dfbdab3687fc3cfecf095d",
    abi: abi,
    functionName: "balanceOf",
    args: [address, 1],
  });

  const isDiskHolder = Boolean(data?.toString() === "1");

  return { isDiskHolder };
};

export default useHODLHQ;
