import { Header } from "@Components/layout/Header";
import { Footer } from "@Components/layout/Footer";
import "@Assets/styles/layout.scss";

export const metadata = {
  title: "NextJS App",
  description: "Pet project by superugrok",
};

interface IRootProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IRootProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="inner">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
