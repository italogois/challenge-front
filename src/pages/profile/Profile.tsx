import React from "react";

import styles from "./Profile.module.css";
import ProfileCard from "../../components/profile/profileCard";
import ProfileHeader from "../../components/profile/profileHeader";
import Container from "../../components/container";
import { ProfileProvider } from "../../components/profile/context/ProfileProvider";

const Profile = () => {
  return (
    <>
      <ProfileProvider>
        <ProfileHeader />

        <Container>
          <ProfileCard />
        </Container>
      </ProfileProvider>
    </>
  );
};

export default Profile;
