"use client";
import { Button, Text } from "@mantine/core";
import classes from "./MusicGenres.module.css";

const MusicGenres = () => {
  const genres = [
    { title: "Hip Hop", img: "/assets/heroImage.jpg" },
    { title: "Rock", img: "/assets/heroImage.jpg" },
    { title: "Classic", img: "/assets/heroImage.jpg" },
  ];

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Music</h2>
      <div className={classes.genreContainer}>
        {genres.map((genre, index) => (
          <div key={index} className={classes.genreCard}>
            <img src={genre.img} alt={genre.title} className={classes.genreImage} />
            <Text className={classes.genreTitle}>
              <strong>{genre.title}</strong>
            </Text>
            <Text className={classes.genreDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </div>
        ))}
      </div>
      <Button variant="outline" className={classes.listenButton}>
        Listen to Music
      </Button>
    </div>
  );
};

export default MusicGenres;
