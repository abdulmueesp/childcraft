import Banner from "@/components/Banner";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import BookOutline from "@/components/BookOutline";
import NewArrivals from "@/components/NewArrivals";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main>

      <Banner />
      <AboutSection />
      <BookOutline />
      <NewArrivals />
      <GallerySection />
    </main>
  );
}