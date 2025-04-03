"use client";
import { Button, Text } from "@mantine/core";
import { WavyBackground } from "@/app/ui/wavy-background";
import classes from "./MusicGenres.module.css";

const MusicGenres = () => {
  const genres = [
    { title: "Intrernational Hits", img: "/assets/internation_music.jpg" },
    { title: "Mak Hits", img: "/assets/mkd_hits.png" },
    { title: "Ex-yu", img: "/assets/ex_yu.jpg" },
  ];

  return (
    <div className={classes.wrapper}>
      <WavyBackground className={classes.wavyOverlay}>
        <div className={classes.content}>
          <h1 className={classes.title}>Music Genres</h1>
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
