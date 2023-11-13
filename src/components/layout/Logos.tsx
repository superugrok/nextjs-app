import Image from "next/image";
import React from "@Assets/img/react.svg";
import Next from "@Assets/img/next.svg";
import Vercel from "@Assets/img/vercel.svg";

export const Logos = () => {
  const logos = [
    {
      id: 1,
      name: "React",
      link: "https://react.dev",
      img: React,
      width: 50,
      height: 50,
    },
    {
      id: 2,
      name: "Next",
      link: "https://nextjs.org",
      img: Next,
    },
    {
      id: 3,
      name: "Vercel",
      link: "https://vercel.com",
      img: Vercel,
    },
  ];

  return (
    <div className="header__logos">
      {logos.map((logo) => (
        <a
          target="_blank"
          className="header__logos__img"
          key={logo.id}
          href={logo.link}
        >
          <Image
            width={logo.width || 70}
            height={logo.height || 70}
            alt={logo.name}
            src={logo.img}
          />
        </a>
      ))}
    </div>
  );
};
