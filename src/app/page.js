import HeroImageBackground from "./components/HeroImageBackground/HeroImageBackground"; // ✅ Ensure correct import

import LatestAlbum from "./components/LatestAlbum/LatestAlbum";
import UpcomingShows from "./components/UpcomingShows/UpcomingShows";
import MusicGenres from "./components/MusicGenres/MusicGenres";
import GallerySection from "./components/GallerySection/GallerySection";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import EventPromotionSection from "./components/EventPromotionSection/EventPromotionSection";
import FooterSection from "./components/FooterSection/FooterSection";

function Home() {
  return (
    <>
      <HeroImageBackground />
      <LatestAlbum />
      <UpcomingShows />
      <MusicGenres />
      <GallerySection />
      <MeetTheTeam />
      <EventPromotionSection />
      <FooterSection />
    </>
  );
}

export default Home;
