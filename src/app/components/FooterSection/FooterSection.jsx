"use client";
import { Text } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconBrandTwitter } from "@tabler/icons-react";
import classes from "./FooterSection.module.css";

const FooterSection = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.about}>
          <h3>About the Ecstasy</h3>
          <Text className={classes.description}>
            Nunc tempus est a dolor cursus pharetra. Donec a massa orci. Nullam eget ante id diam blandit accumsan.
          </Text>
          <div className={classes.socials}>
            <IconBrandFacebook size={24} />
            <IconBrandInstagram size={24} />
            <IconBrandYoutube size={24} />
            <IconBrandTwitter size={24} />
          </div>
        </div>
        <div className={classes.logo}>
          <h2>🎧 ECSTASY</h2>
        </div>
      </div>

      <Text className={classes.copyright}>
        Copyrights © 2024 - All rights reserved. Design by <a href="#">Lucrative Studio</a>.
      </Text>
    </footer>
  );
};

export default FooterSection;
