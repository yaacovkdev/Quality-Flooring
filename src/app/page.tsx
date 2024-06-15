import FlooringBarDesign from "@/components/FlooringBarDesign/FlooringBarDesign";
import HeroTitle from "../components/HeroTitle/HeroTitle";
import MainLayout from "@/components/MainLayout/MainLayout";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
          strategy="beforeInteractive"
        />
        ;
      </Head>
      <MainLayout
        children={
          <>
            <HeroTitle />
            <FlooringBarDesign />
          </>
        }
      />
    </>
  );
}
