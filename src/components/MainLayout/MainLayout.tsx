import "./MainLayout.scss";
import Header from "../Header/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
    </>
  );
}
