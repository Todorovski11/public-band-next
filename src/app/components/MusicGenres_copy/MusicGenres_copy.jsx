"use client";
import { Button, Text } from "@mantine/core";
import classes from "./MusicGenres_copy.module.css";

const MusicGenres = () => {
  const genres = [
    { title: "Intrernational Hits", img: "/assets/heroImage.jpg" },
    { title: "Mak Hits", img: "/assets/heroImage.jpg" },
    { title: "Ex-yu", img: "/assets/heroImage.jpg" },
  ];

  return (
    <div className={classes.wrapper}>
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
    </div>
  );
};

export default MusicGenres;
