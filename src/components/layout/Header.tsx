import { Navigation } from "./Navigation";
import { Logos } from "./Logos";

export const Header = () => {
  return (
    <header className="header">
      <Logos />
      <Navigation />
    </header>
  );
};
