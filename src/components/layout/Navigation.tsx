import Link from "next/link";

export const Navigation = () => {
  const links = [
    {
      id: 1,
      text: "Home",
      path: "/",
    },
    {
      id: 2,
      text: "Table",
      path: "/table",
    },
    {
      id: 3,
      text: "Peoples",
      path: "/peoples",
    },
    {
      id: 4,
      text: "Animals",
      path: "/animals",
    },
  ];

  return (
    <nav className="header__nav">
      {links.map((link) => (
        <Link key={link.id} className="header__nav__link" href={link.path}>
          {link.text}
        </Link>
      ))}
    </nav>
  );
};
