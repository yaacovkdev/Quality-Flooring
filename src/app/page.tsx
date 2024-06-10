import HeroTitle from "../components/HeroTitle/HeroTitle";
import MainLayout from "@/components/MainLayout/MainLayout";

export default function Home() {
  
  return (
    <MainLayout 
      children={<><HeroTitle /></>}
    />
  );
}
