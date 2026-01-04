import { LandingPage } from "@/components/LandingPage";
import { getDictionary } from "@/dictionaries";
import { Header } from "@/components/layout/Header";

export default function Home() {
  const dict = getDictionary("en");
  return (
    <>
      <Header />
      <LandingPage dict={dict} />
    </>
  );
}
