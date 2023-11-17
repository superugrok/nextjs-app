import { Header } from "@Components/layout/Header";
import { Footer } from "@Components/layout/Footer";
import "@Assets/styles/layout.scss";
import { IRootProps } from "@Types/common";

export const metadata = {
  title: "NextJS App",
  description: "Pet project by superugrok",
};

const RootLayout: React.FC<IRootProps> = ({ children }) => {
  return (
    <html lang="en">
      <body id="root">
        <Header />
        <div className="inner">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
