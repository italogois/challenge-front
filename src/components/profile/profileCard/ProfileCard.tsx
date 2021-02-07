import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileProvider";
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  const { user, followUser, getRadomUser$ } = useContext(ProfileContext);

  return (
    <>
      <div className={styles.profileWrapper}>
        <div className={styles.profileBio}>
          <div
            className={styles.profileBackground}
            style={{ backgroundImage: `url(${user.picture.large})` }}
          ></div>

          <div className={styles.profileImage}>
            <img src={user.picture.large} alt="" />
          </div>

          <h2 className={styles.profileName}>
            {user.name.first} {user.name.last}
          </h2>
          <div className="endereco">
            {user.location.city}, {user.location.country}
          </div>

          <div className={styles.actionsButtons}>
            <button onClick={followUser}>Follow</button>
            <button onClick={getRadomUser$} className={styles.buttonOutline}>
              Next user
            </button>
          </div>
        </div>

        <div className={styles.personalInfo}>
          <h4>Personal Info</h4>
          <ul className={styles.infoList}>
            <li>Born at: {user.nat}</li>
            <li>Age: {user.dob.age} years old</li>
          </ul>
        </div>

        <div className={styles.contactInfo}>
          <h4>Contact Info</h4>
          <ul className={styles.infoList}>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
