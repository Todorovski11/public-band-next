"use client";
import { Card, Text, Image, Group, Button } from "@mantine/core";
import { IconThumbUp, IconHeadphones, IconShare } from "@tabler/icons-react";
import classes from "./LatestAlbum.module.css";

const LatestAlbum = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.overlay}></div> {/* ✅ Background Overlay */}
      <Card className={classes.albumCard} shadow="sm" radius="md">
        <div className={classes.albumInfo}>
          <Image src="/assets/heroImage.jpg" alt="Album Cover" className={classes.albumImage} />
          <div className={classes.textContainer}>
            <Text className={classes.albumTitle}>
              <strong>Најновиот сигнл на </strong> Александар
            </Text>
            <Text className={classes.albumDescription}>Новата песна на господин АЦО</Text>
          </div>
        </div>

        <div className={classes.musicPlayer}>
          <Button variant="filled" color="dark" size="lg" className={classes.musicButton}>
            ▶ Music New
          </Button>
        </div>

        <Group className={classes.stats}>
          <Text className={classes.statItem}>
            <IconThumbUp size={16} /> 32,870
          </Text>
          <Text className={classes.statItem}>
            <IconHeadphones size={16} /> 45,350
          </Text>
          <Text className={classes.statItem}>
            <IconShare size={16} /> 20,530
          </Text>
        </Group>
      </Card>
    </div>
  );
};

export default LatestAlbum;
