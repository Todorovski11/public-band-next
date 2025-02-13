"use client";
import { Button, Text } from "@mantine/core";
import { WavyBackground } from "@/app/ui/wavy-background";
import classes from "./MusicGenres.module.css";

const MusicGenres = () => {
  const genres = [
    { title: "Hip Hop", img: "/assets/heroImage.jpg" },
    { title: "Rock", img: "/assets/heroImage.jpg" },
    { title: "Classic", img: "/assets/heroImage.jpg" },
  ];

  return (
    <div className={classes.wrapper}>
      <WavyBackground className={classes.wavyOverlay}>
        <div className={classes.content}>
          <h2 className={classes.title}>Music Genres</h2>
          <div className={classes.genreContainer}>
            {genres.map((genre, index) => (
              <div key={index} className={classes.genreCard}>
                <img src={genre.img} alt={genre.title} className={classes.genreImage} />
                <Text className={classes.genreTitle}><strong>{genre.title}</strong></Text>
                <Text className={classes.genreDescription}>
                  Discover the best {genre.title} music and artists.
                </Text>
              </div>
            ))}
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default MusicGenres;
