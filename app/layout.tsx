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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
