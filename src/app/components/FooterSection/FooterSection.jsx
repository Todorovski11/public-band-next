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

        <div className={classes.links}>
          <div>
            <h4>Main</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Bio</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Book Now</a></li>
            </ul>
          </div>
          <div>
            <h4>Other</h4>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">FAQ’s</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">404 Error</a></li>
            </ul>
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
