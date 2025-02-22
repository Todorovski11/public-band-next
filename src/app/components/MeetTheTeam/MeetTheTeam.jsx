"use client";
import classes from "./MeetTheTeam.module.css";

const MeetTheTeam = () => {
  const teamMembers = [
    { name: "Jana Spirkovska", role: "Vocal", image: "/assets/Jana.jpg" },
    { name: "Aleksandar Spasencovski", role: "Vocal, Keys", image: "/assets/Aleksandar.png" },
    { name: "Andrej Jovanovikj", role: "Guitar", image: "/assets/Andrej.png" },
    { name: "Aleksandar Spirov", role: "Drums", image: "/assets/Aleksandar_2.png" },
  ];

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Meet The Team</h2>
      <div className={classes.teamContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} className={classes.teamCard}>
            <img src={member.image} alt={member.name} className={classes.teamImage} />
            <div className={classes.teamInfo}>
              <p className={classes.name}>{member.name}</p>
              <p className={classes.role}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
