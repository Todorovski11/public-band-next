"use client";
import classes from "./MeetTheTeam.module.css";

const MeetTheTeam = () => {
  const teamMembers = [
    { name: "Mathew Hyatt", role: "Vocal, guitar" },
    { name: "Aco Pedero", role: "Vocal, piano" },
    { name: "Toby Halvorson", role: "Bass guitar" },
    { name: "Anna Mayer", role: "Drums" },
  ];

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Meet The Team</h2>
      <div className={classes.teamContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} className={classes.teamCard}>
            <img src="/assets/heroImage.jpg" alt={member.name} className={classes.teamImage} />
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
