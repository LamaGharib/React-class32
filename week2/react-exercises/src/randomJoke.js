import React, { useEffect, useState } from "react";

export const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const getJoke = async () => {
    const result = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = await result.json();
    setJoke(joke);
    return joke;
  };

  useEffect(() => {
    getJoke();
  }, []);
  return (
    <div>
      <Joke joke={joke} />
    </div>
  );
};

const Joke = ({ joke }) => {
  console.log(joke);
  return (
    <div>
      <p>{joke.punchline}</p>
      <p>{joke.setup}</p>
    </div>
  );
};
