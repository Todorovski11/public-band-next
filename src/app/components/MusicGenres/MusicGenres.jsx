"use client";
import React, { useEffect, useState } from "react";
import { Text } from "@mantine/core";
import classes from "./MusicGenres.module.css";

const MusicGenres = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const genres = [
    { title: "Intrernational Hits", img: "/assets/internation_music.jpg" },
    { title: "Mak Hits", img: "/assets/mkd_hits.png" },
    { title: "Ex-yu", img: "/assets/ex_yu.jpg" },
  ];

  if (!mounted) return null; // ✅ avoids hydration/unmount issues

  // ✅ import WavyBackground only on client
  const { WavyBackground } = require("@/app/ui/wavy-background");

  return (
    <div className={classes.wrapper}>
      <WavyBackground key="music-waves" className={classes.wavyOverlay}>
        <div className={classes.content}>
          <h1 className={classes.title}>Music Genres</h1>
          <div className={classes.genreContainer}>
            {genres.map((genre, index) => (
              <div key={index} className={classes.genreCard}>
                <img
                  src={genre.img}
                  alt={genre.title}
                  className={classes.genreImage}
                />
                <Text className={classes.genreTitle}>
                  <strong>{genre.title}</strong>
                </Text>
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
