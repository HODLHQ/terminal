import Image from "next/image";
import poster from "../../../public/poster.png";

const Poster = () => {
  return (
    <div className="invisible md:visible">
      <Image
        src={poster}
        alt=""
        className="max-h-1/2 absolute top-0 right-0 z-10 float-right h-1/2 object-contain object-right"
      />
    </div>
  );
};

export default Poster;
