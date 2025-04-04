import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Image from "next/image";

export default function Home() {
  return (
    <section className=" bg-primary min-h-screen w-full ">
      <Hero/>
      <Packages/>
    </section>
  );
}
