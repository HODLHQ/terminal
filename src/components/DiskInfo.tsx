import Image from "next/image";
import Link from "next/link";
import floppy from "../../../public/floppy.png";

const Screen = () => {
  return (
    <div className="my-2 flex max-w-md flex-row">
      <Image className=" w-48 rounded-none object-cover" src={floppy} alt="" />
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium text-gray-900">
          Mint a HODLHQ Disk
        </h5>
        <p className="font-small text-lg text-gray-900">
          Mint your membership disk (free + gas) only on the Manifold website.
        </p>
        <div className="flex items-stretch">
          <Link
            href="https://app.manifold.xyz/c/hhqmembership"
            target="_blank"
            rel="noopener noreferrer"
            className=" mr-1 inline-block rounded bg-blue-600 p-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          >
            Mint Disk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Screen;
