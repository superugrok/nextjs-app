import "@Assets/styles/animals.scss";
import Image from "next/image";
import { defaultBase64 } from "@Configs/defaultBase64";

const Fun = () => {
  return (
    <div className="fun">
      <Image
        src={"https://i.ibb.co/wgZMv7C/elephant.png"}
        width={860}
        height={681}
        alt="Elephants"
        placeholder="blur"
        blurDataURL={defaultBase64}
      />
      <Image
        src={"https://i.ibb.co/Bnk3nnz/tiger.webp"}
        width={860}
        height={681}
        alt="Tiger"
        placeholder="blur"
        blurDataURL={defaultBase64}
      />
    </div>
  );
};

export default Fun;
