import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Blog } from "@/components/sections/blog";
import { CustomDev } from "@/components/sections/custom-dev";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Hero } from "@/components/sections/hero";
import { Industries } from "@/components/sections/industries";
import { Pricing } from "@/components/sections/pricing";
import { SuccessCase } from "@/components/sections/success-case";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Industries />
        <Ecosystem />
        <Pricing />
        <SuccessCase />
        <CustomDev />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
