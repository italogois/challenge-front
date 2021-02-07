import React, { createContext, useState } from "react";

const ProfileContext = createContext<any>(null);

function ProfileProvider({ children }: any) {
  const API_ENDPOINT = "https://randomuser.me/api/";
  const USER_VALUE_INIT = {
    gender: "male",
    name: {
      title: "Mr",
      first: "Italo",
      last: "Góis",
    },
    location: {
      street: {
        number: 7974,
        name: "Hilton Highway",
      },
      city: "Auckland",
      state: "Waikato",
      country: "New Zealand",
      postcode: 30610,
      coordinates: {
        latitude: "60.4869",
        longitude: "-167.7269",
      },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg",
      },
    },
    email: "flynn.moore@example.com",
    login: {
      uuid: "588c60d3-8c9d-4c1b-9ead-de155b944af4",
      username: "redswan886",
      password: "temppass",
      salt: "IVK1YeTu",
      md5: "d1af29788ead0d4d73b079b95624104e",
      sha1: "8d49a4c44e2bf8a7a232ad207b162712db504b89",
      sha256:
        "a8663850779bdb65c1acdd6f91b0978b29606f32bbaed84b3baa3d35da9e59bb",
    },
    dob: {
      date: "1993-04-02T04:27:03.153Z",
      age: 28,
    },
    registered: {
      date: "2003-05-07T04:48:42.645Z",
      age: 18,
    },
    phone: "(375)-236-9240",
    cell: "(853)-662-1481",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/33.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/33.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/33.jpg",
    },
    nat: "NZ",
  };

  const [user, setUser] = useState<any>(USER_VALUE_INIT);
  const [usersFollowing, setUsersFollowing] = useState<any[]>([]);

  function getRadomUser$(): void {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch(function (error) {
        console.log(error);
      });
  }

  function followUser(): void {
    setUsersFollowing([...usersFollowing, user]);
  }

  function unfollowUser(userUnfollow: any): void {
    const fieltredUsers = usersFollowing.filter(
      (user) => user !== userUnfollow
    );

    setUsersFollowing(fieltredUsers);
  }

  return (
    <ProfileContext.Provider
      value={{ user, usersFollowing, followUser, unfollowUser, getRadomUser$ }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileProvider };
