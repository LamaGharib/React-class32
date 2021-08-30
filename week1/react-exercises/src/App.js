import React, { useState } from "react";
import chat from "./assets/exercises/chat.png";
import coin from "./assets/exercises/coin.png";
import delivery from "./assets/exercises/delivery.png";

const App = () => {
  //exercise1
  const Hobby = ({ hobby }) => {
    return <li>{hobby}</li>;
  };
  const HobbyList = () => {
    const hobbies = [
      "Surfing",
      "Rock climbing",
      "Mountain biking",
      "Breakdancing",
    ];
    return (
      <ul className="hobby-list">
        {hobbies.map((hobby, index) => (
          <Hobby hobby={hobby} key={index} />
        ))}
      </ul>
    );
  };

  //exercise2
  const Guarantee = ({ img, title, description }) => {
    return (
      <div className="guarantee-list">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  //exercise3
  const Counter = () => {
    const [count, setCount] = useState(0);
    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
    return (
      <>
        <Count count={count} />
        <Button setCount={setCount} />
        <h3>{feedback}</h3>
      </>
    );
  };
  const Count = ({ count }) => {
    return <p>{count}</p>;
  };
  const Button = ({ setCount }) => {
    const add = () => {
      setCount((pervCount) => pervCount + 1);
    };
    return <button onClick={add}>Add 1!</button>;
  };

  return (
    <>
      <div className="exercise-1">
        <HobbyList />
      </div>
      <div className="exercise-2">
        <Guarantee img={delivery} title="Free Shipping" description="lorem" />
        <Guarantee img={coin} title="100% Money Back" description="lorem" />
        <Guarantee img={chat} title="Online Support 24/7" description="lorem" />
      </div>
      <div className="exercise-3">
        {" "}
        <Counter />
      </div>
    </>
  );
};

export default App;
