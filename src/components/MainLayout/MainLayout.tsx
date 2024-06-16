"use client";

import "./MainLayout.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //make sure the page
  const query = useParams();
  const path = usePathname();

  const [boxClassname, setBoxClassName] = useState("main-layout-box");

  useEffect(() => {
    if (path.match(/^(\/show\/)/g) && query.id) {
      setBoxClassName(boxClassname + " main-layout-box--showcase-item");
    }
    console.log(query.id);
  }, []);

  return (
    <div className={boxClassname}>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
