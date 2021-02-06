import React, { useContext } from "react";
import Container from "../../container";
import { ProfileContext } from "../context/ProfileProvider";
import styles from "./ProfileHeader.module.css";

const ProfileHeader = () => {
  const { usersFollowing } = useContext(ProfileContext);

  const EMPTY_USER = 0;

  function textUser(): string {
    return usersFollowing?.length > 1 ? "users" : "user";
  }
  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.wrapper}>
            <h1 className={styles.projectName}>Find new users like you</h1>
            <div className={styles.usersFollowing}>
              {usersFollowing?.length > EMPTY_USER
                ? `You following ${usersFollowing?.length} ${textUser()}`
                : "Start following someone"}
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default ProfileHeader;
