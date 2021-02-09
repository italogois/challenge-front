import React, { createContext, useState, ReactNode } from "react";

interface User {
  readonly gender: string;
  readonly name: {
    readonly title: string;
    readonly first: string;
    readonly last: string;
  };
  readonly location: {
    readonly street: {
      readonly number: number;
      readonly name: string;
    };
    readonly city: string;
    readonly state: string;
    readonly country: string;
    readonly postcode: number;
  };
  readonly email: string;
  readonly dob: {
    readonly date: string;
    readonly age: number;
  };
  readonly phone: string;
  readonly picture: {
    readonly large: string;
    readonly medium: string;
    readonly thumbnail: string;
  };
  readonly nat: string;
}

interface ProfileProvider {
  readonly children: ReactNode;
}

type TypeProfileContext = {
  user: User;
  usersFollowing: User[];
  followUser: () => void;
  unfollowUser: (userUnfollow: User) => void;
  getRadomUser$: () => void;
};

const ProfileContext = createContext<Partial<TypeProfileContext>>({});

function ProfileProvider({ children }: ProfileProvider) {
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
      country: "Brazil",
      postcode: 30610,
    },
    email: "flynn.moore@example.com",
    dob: {
      date: "1993-04-02T04:27:03.153Z",
      age: 28,
    },
    phone: "(375)-236-9240",
    picture: {
      large: "https://randomuser.me/api/portraits/men/33.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/33.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/33.jpg",
    },
    nat: "NZ",
  };

  const [user, setUser] = useState<User>(USER_VALUE_INIT);
  const [usersFollowing, setUsersFollowing] = useState<User[]>([]);

  function getRadomUser$(): void {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch(function (error) {
        console.log(error);
      });
  }

  function followUser(): void {
    if (usersFollowing.includes(user)) return;

    setUsersFollowing([...usersFollowing, user]);
  }

  function unfollowUser(userUnfollow: User): void {
    const fieltredUsers = usersFollowing.filter(
      (user) => user !== userUnfollow
    );

    setUsersFollowing(fieltredUsers);
  }

  const props: TypeProfileContext = {
    user: user,
    usersFollowing: usersFollowing,
    followUser: followUser,
    unfollowUser: unfollowUser,
    getRadomUser$: getRadomUser$,
  };

  return (
    <ProfileContext.Provider value={props}>{children}</ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileProvider };
