import Hero from "@/components/Hero";
import AboutUs from "@/components/aboutUs";
import Category from "@/components/category";
import Doctorsec from "@/components/doctorsec";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Category/>
      <Doctorsec/>
      
    </main>
  );
}
