import NoPageImg from "@Assets/img/nopage.svg";
import Image from "next/image";

const NoPage = () => {
  return (
    <Image
      className="nopage"
      alt="404"
      src={NoPageImg}
      width={300}
      height={300}
    />
  );
};

export default NoPage;
