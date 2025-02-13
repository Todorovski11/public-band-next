"use client";
import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import styles from "./UpcomingShows.module.css";

const events = [
  {
    date: "09",
    month: "Feb",
    title: "Astra kazino",
    description: "Da mi piesh od chesmicevo",
    location: "Kichevo, NMK",
    time: "11:45 PM",
    image: "/assets/heroImage.jpg",
  },
  {
    date: "15",
    month: "Mar",
    title: "Rock Night",
    description: "A night full of rock and roll",
    location: "New York, USA",
    time: "09:30 PM",
    image: "/assets/heroImage.jpg",
  },
  {
    date: "22",
    month: "Apr",
    title: "Jazz Evening",
    description: "Smooth jazz and blues night",
    location: "Chicago, USA",
    time: "08:00 PM",
    image: "/assets/heroImage.jpg",
  },
  {
    date: "30",
    month: "May",
    title: "EDM Party",
    description: "Biggest electronic dance event",
    location: "Miami, USA",
    time: "10:30 PM",
    image: "/assets/heroImage.jpg",
  },
];

const UpcomingShows = () => {
  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          {events.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              {/* Left Side: Date & Image */}
              <div className={styles.dateImageContainer}>
                <div className={styles.date}>
                  <span>{event.date}</span>
                  <span>{event.month}</span>
                </div>
                <Image
                  src={event.image}
                  alt={event.title}
                  width={100} /* ✅ Bigger image */
                  height={80}
                  className={styles.eventImage}
                />
              </div>

              {/* Event Details */}
              <div className={styles.details}>
                <h2 className={styles.title}>{event.title}</h2>
                <p className={styles.description}>{event.description}</p>
              </div>

              {/* Location & Time */}
              <div className={styles.locationTime}>
                <div className="flex items-center">
                  <FaMapMarkerAlt className={styles.icon} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center mt-2">
                  <FaCalendarAlt className={styles.icon} />
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingShows;
