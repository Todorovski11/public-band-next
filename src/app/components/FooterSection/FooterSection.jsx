"use client";
import Image from "next/image";
import { Text } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitter,
} from "@tabler/icons-react";
import classes from "./FooterSection.module.css";
import logo from "../../../../public/assets/logo.png"; // Import your logo

const FooterSection = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.about}>
          <h3>About the Public band</h3>
          <Text className={classes.description}>
            Prepare yourself for an unforgettable night of music, rhythm, and pure adrenaline.
            When Public Band takes the stage, every beat, every melody, and every moment comes alive.
            This isn't just a concert — it's the soundtrack to the best night of your life.
          </Text>
          <div className={classes.socials}>
            <a
              href="https://www.facebook.com/profile.php?id=61568452600040"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/public__band/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandInstagram size={24} />
            </a>
            <IconBrandYoutube size={24} />
            <IconBrandTwitter size={24} />
          </div>
        </div>
        <div className={classes.logo}>
          <Image src={logo} alt="Ecstasy Logo" width={120} height={50} priority />
        </div>
      </div>
      <Text className={classes.copyright}></Text>
    </footer>
  );
};

export default FooterSection;
