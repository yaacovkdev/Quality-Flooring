import "./MainLayout.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-layout-box">
      <Header />
        <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
