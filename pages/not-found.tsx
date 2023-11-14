import Link from "next/link";

const NoPage = () => {
  return (
    <div>
      <span>404 Error</span>
      <Link href={"/"} />
    </div>
  );
};

export default NoPage;
