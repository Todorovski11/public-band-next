"use client";
import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import styles from "./UpcomingShows.module.css";

const events = [
  {
    date: "11",
    month: "April",
    title: "Aristocrat",
    description: "Reservation info: 02/ 3-117-483",
    location: "Skopje, MK",
    time: "21:00 PM",
    image: "/assets/aristocrat.jpg",
  },
  {
    date: "12",
    month: "April",
    title: "Myth Bar",
    description: "Reservation info: 071-345-160",
    location: "Skopje, MK",
    time: "09:30 PM",
    image: "/assets/myth.png",
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
