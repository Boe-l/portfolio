import { Hero } from "@/components/Hero";
import { LogoAnimation } from "@/components/LogoAnimation";
import { NavBar } from "@/components/NavBar";
import { Stack } from "@/components/Stack";
import { PortfolioWidget } from "@/components/PortfolioWidget";
import Image from "next/image";
import { KeyMetrics } from "@/components/KeyMetrics";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Stack />
      <LogoAnimation />
      <PortfolioWidget />
      <KeyMetrics />
      <Services />
      <Contact />

    </>
  );
}
