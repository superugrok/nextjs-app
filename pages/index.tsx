import Image from "next/image";
import Firework from "@Assets/img/firework.svg";

const Home = () => {
  return (
    <div className="home">
      <Image
        className="home__image"
        width={200}
        height={200}
        src={Firework}
        alt="Firework"
      />
      <div className="home__content">
        You are welcome into my test NextJS Application!
      </div>
    </div>
  );
};

export default Home;
