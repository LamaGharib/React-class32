import React, { useState } from "react";

export const Friends = () => {
  const [friend, setFriend] = useState({});

  const getFriend = async () => {
    try {
      const results = await fetch("https://www.randomuser.me/api?results=1");
      const friend = await results.json();
      setFriend(friend);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {Object.keys(friend).length !== 0 && <FriendProfile {...friend} />}

      <Button getFriend={getFriend} />
    </>
  );
};

const FriendProfile = ({ ...friend }) => {
  const data = friend.results[0];
  console.log(data);

  return (
    <div>
      <ul>
        <li>{` Name: ${data.name.first} ${data.name.last}`}</li>
        <li>{`Location: ${data.location.country} ${data.location.city}`}</li>
        <li>{`Phone: ${data.phone},
         E-mail: ${data.email} `}</li>
      </ul>
    </div>
  );
};

const Button = ({ getFriend }) => {
  return <button onClick={() => getFriend()}>Get a friend!</button>;
};
