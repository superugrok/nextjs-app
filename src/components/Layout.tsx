import { ReactNode } from "react";
import { Header } from "@Components/layout/Header";
import { Footer } from "@Components/layout/Footer";

interface IProps {
  children: ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <div className="inner">{children}</div>
      <Footer />
    </>
  );
};