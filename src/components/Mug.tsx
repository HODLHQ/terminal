import coffee from "../../../public/coffee.png";
import Image from "next/image";

const Mug = () => {
  return (
    <div className="invisible md:visible">
      <Image
        src={coffee}
        alt=""
        className="invisible absolute bottom-0 left-0 z-30 float-left h-1/5 object-contain object-left md:visible"
      />
    </div>
  );
};

export default Mug;
