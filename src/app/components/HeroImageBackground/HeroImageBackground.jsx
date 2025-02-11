"use client"; // ✅ Required for Next.js App Router

import cx from "clsx";
import { Button, Container, Overlay, Text, Title } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitter,
} from "@tabler/icons-react";
import classes from "./HeroImageBackground.module.css";
import Image from "next/image"; // ✅ Use Next.js <Image> component for optimization

const HeroImageBackground = () => {
  return (
    <div className={classes.wrapper} style={{ backgroundImage: `url('/assets/heroImage.jpg')` }}>
      <Overlay color="#000" opacity={0.6} zIndex={1} />

      {/* Social Icons (Left Side) */}
      <div className={classes.socialIcons}>
        <IconBrandFacebook size={50} />
        <IconBrandInstagram size={50} />
        <IconBrandYoutube size={50} />
        <IconBrandTwitter size={50} />
      </div>

      {/* Logo on the Right Side */}
      <div className={classes.logoContainer}>
        <Image src="/assets/logo.png" alt="Public Band Logo" width={100} height={50} className={classes.logo} />
      </div>

      <div className={classes.inner}>
        <Title className={classes.title}>
          Welcome to <Text component="span" inherit className={classes.highlight}>Public Band</Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Discover amazing music, connect with fans, and explore new sounds.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">Join Now</Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">Listen Live</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroImageBackground; // ✅ Export as default
