import { HeroImageBackground } from "./components/HeroImageBackground/HeroImageBackground";
import MusicGenres from "./components/MusicGenres/MusicGenres";
import MusicGenresCopy from "./components/MusicGenres_copy/MusicGenres_copy";
import GallerySection from "./components/GallerySection/GallerySection";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import FooterSection from "./components/FooterSection/FooterSection";
import MobileGalleryWrapper from "./components/MobileGalleryWrapper";
import MosaicStats from "./components/MosaicStats/MosaicStats";

function Home() {
  return (
    <div>
      <HeroImageBackground />

      <div>
      {/* your other components */}
      <MosaicStats />
      {/* more components */}
    </div>
      
      <div className="hidden md:block">
        <MusicGenres />
      </div>
      <div className="block md:hidden">
        <MusicGenresCopy />
      </div>
      
      <div className="hidden md:block">
        <GallerySection />
      </div>
      <div className="block md:hidden">
        <MobileGalleryWrapper />
      </div>

      <FooterSection />
    </div>
  );
}

export default Home;
