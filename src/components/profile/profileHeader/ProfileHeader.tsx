import React, { useContext, useState } from "react";
import Container from "../../container";
import { ProfileContext } from "../context/ProfileProvider";
import styles from "./ProfileHeader.module.css";
import arrowDown from "../../../images/down-arrow.svg";

const ProfileHeader = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { usersFollowing, unfollowUser } = useContext(ProfileContext);
  const EMPTY_USER = 0;
  const userFollowCount = usersFollowing?.length;

  function textUser(): string {
    return usersFollowing?.length > 1 ? "users" : "user";
  }

  function toggleList(): void {
    setToggle(!toggle);
  }

  function textUserFollowing(): string {
    return usersFollowing?.length > EMPTY_USER
      ? `You following ${userFollowCount} ${textUser()}`
      : "You following";
  }

  function showListClass(): string {
    return toggle ? styles.usersListShow : "";
  }

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.wrapper}>
            <h1 className={styles.projectName}>Find new users like you</h1>
            <div className={styles.usersFollowing}>
              <button className={styles.textButton} onClick={toggleList}>
                following {userFollowCount} {textUser()}
                <img src={arrowDown} />
              </button>

              <div className={`${styles.usersList}  ${showListClass()} `}>
                <ul>
                  {usersFollowing?.map((user: any) => (
                    <li key={user.name.first} className={styles.usersListItem}>
                      <div className={styles.userInfo}>
                        <div className={styles.profileImage}>
                          <img src={user.picture.large} alt="" />
                        </div>

                        <div className="description">
                          <h4>
                            {user.name.first} {user.name.last}
                          </h4>
                          <div className={styles.address}>
                            {user.location.city}, {user.location.country}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => unfollowUser(user)}
                        className={styles.smallButton}
                      >
                        unfollow
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default ProfileHeader;
