import { HeroImageBackground } from "./components/HeroImageBackground/HeroImageBackground";
import LatestAlbum from "./components/LatestAlbum/LatestAlbum";
import UpcomingShows from "./components/UpcomingShows/UpcomingShows";
import MusicGenres from "./components/MusicGenres/MusicGenres";
import MusicGenresCopy from "./components/MusicGenres_copy/MusicGenres_copy"; // Mobile version
import GallerySection from "./components/GallerySection/GallerySection";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import EventPromotionSection from "./components/EventPromotionSection/EventPromotionSection";
import FooterSection from "./components/FooterSection/FooterSection";
import MobileGalleryWrapper from "./components/MobileGalleryWrapper"; // ✅ Use wrapper
import MasonryGallery from "./components/MasonryGallery/MasonryGallery"
import { ExpandableCardDemo } from "./components/ExpandableCardDemo/ExpandableCardDemo";


function Home() {
  return (
    <>
      <HeroImageBackground />
      <ExpandableCardDemo />
      <UpcomingShows />
      <MeetTheTeam />

      {/* Show MusicGenres only on large screens */}
      <div className="hidden md:block">
        <MusicGenres />
      </div>

      {/* Show MusicGenresCopy only on small screens */}
      <div className="block md:hidden">
        <MusicGenresCopy />
      </div>

      {/* Show GallerySection only on larger screens (Web) */}
      <div className="hidden md:block">
        <GallerySection />
      </div>

      {/* Show MobileGallery only on small screens */}
      <div className="block md:hidden">
        <MobileGalleryWrapper /> {/* ✅ Use the wrapper */}
      </div>

      <EventPromotionSection />
      <FooterSection />
    </>
  );
}

export default Home;
