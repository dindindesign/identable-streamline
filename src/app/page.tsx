import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionFive from "@/components/SectionFive";
import SectionFour from "@/components/SectionFour";
import SectionOne from "@/components/SectionOne";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";

export default function Home() {
  return (
    <main>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </main>
  );
}
