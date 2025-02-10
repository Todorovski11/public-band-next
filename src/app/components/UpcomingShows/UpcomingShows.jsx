import { Button, Card, Image, Text, Group } from '@mantine/core';
import { IconMapPin, IconCalendar, IconClock } from '@tabler/icons-react';
import classes from './UpcomingShows.module.css';

const shows = [
  { date: '19', month: 'Jan', img: 'show1.jpg' },
  { date: '09', month: 'Feb', img: 'show2.jpg' },
  { date: '10', month: 'Mar', img: 'show3.jpg' },
  { date: '19', month: 'Apr', img: 'show4.jpg' },
];

export function UpcomingShows() {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Upcoming Shows</h2>
      <div className={classes.showList}>
        {shows.map((show, index) => (
          <Card key={index} className={classes.showCard} shadow="sm" radius="md">
            <div className={classes.dateBox}>
              <Text className={classes.date}>{show.date}</Text>
              <Text className={classes.month}>{show.month}</Text>
            </div>
            <Image src={`../../assets/${show.img}`} alt="Show" className={classes.showImage} />
            <div className={classes.showInfo}>
              <Text className={classes.showTitle}><strong>Amazing Live Show</strong></Text>
              <Text className={classes.showDesc}>Live show and albums signing</Text>
              <Group className={classes.showDetails}>
                <Text><IconMapPin size={16} /> Los Angeles, USA</Text>
                <Text><IconClock size={16} /> 11:45 PM</Text>
              </Group>
            </div>
            <Button variant="outline" className={classes.ticketButton}>Buy Tickets</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
