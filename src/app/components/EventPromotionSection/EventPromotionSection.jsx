"use client";
import { Button, Text } from "@mantine/core";
import classes from "./EventPromotionSection.module.css";

const EventPromotionSection = () => {
  return (
    <div className={classes.wrapper} style={{ backgroundImage: `url('/assets/public.jpg')` }}>
      <div className={classes.content}>
        <h2 className={classes.title}>
          Liven up <br /> Your Event!
        </h2>
        <Text className={classes.description}>
          It is a long-established fact that a reader will be distracted by the readable content of a page.
        </Text>
        <Button variant="outline" className={classes.learnMoreButton}>
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default EventPromotionSection;
