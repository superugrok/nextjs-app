import Image from "next/image";
import Linkedin from "@Assets/img/linkedin.svg";
import Github from "@Assets/img/github.svg";

export const Footer = () => {
  const socials = [
    {
      id: 1,
      name: "Linkedin",
      path: "https://linkedin.com/in/artyom-matsko/",
      icon: Linkedin,
    },
    {
      id: 2,
      name: "GitHub",
      path: "https://github.com/superugrok",
      icon: Github,
    },
  ];

  return (
    <footer className="footer">
      {socials.map((social) => (
        <a
          key={social.id}
          className="footer__link"
          target="_blank"
          href={social.path}
        >
          <Image width={50} height={50} src={social.icon} alt={social.name} />
        </a>
      ))}
    </footer>
  );
};
