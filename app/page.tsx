import Banner from "@/components/Banner";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import BookOutline from "@/components/BookOutline";
import NewArrivals from "@/components/NewArrivals";

export default function Home() {
  return (
    <main>

      <Banner />
      <AboutSection />
      <BookOutline />
      <NewArrivals />
    </main>
  );
}