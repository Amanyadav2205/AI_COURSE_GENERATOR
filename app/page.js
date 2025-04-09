import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
// import Hero from "./_components/Hero";
import LandingPage from "./_components/LandingPage";


export default function Home() {
  return (
   <div>
    {/* Header*/}
    <Header/>
    {/* Hero section*/}
    <LandingPage/>
   </div>
  );
}
