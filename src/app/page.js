import AboutTheArchive from "@/components/MainScreen/AboutTheArchive";
import HeroSection from "@/components/MainScreen/HeroSection";
import TEDxInNumbers from "@/components/TEDInNumbers/TEDxInNumbers";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutTheArchive />
      <div className="bg-black pt-6">
        <TEDxInNumbers />
      </div>
    </main>
  );
}

export default HomePage;
