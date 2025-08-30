import Header from "@/components/layout/Header/Header";
import Hero from "@/components/landing/Hero/Hero";
import FeaturesRow from "@/components/landing/FeaturesRow/FeaturesRow";

export default function Landing() {
  return (
    <main style={{ background: "var(--page-bg)", minHeight: "100dvh" }}>
      <Header />
      <Hero />
      <FeaturesRow />
    </main>
  );
}
