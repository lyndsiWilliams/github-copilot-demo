import { useState, useEffect } from "react";

const fetchDadJokes = () => {
  return fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data.joke);
};

const DemoComponent = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchDadJokes().then((joke) => setJoke(joke));
  }, []);

  const handleClick = () => {
    fetchDadJokes().then((joke) => setJoke(joke));
  };

  return (
    <div>
      <h1>Dad Jokes</h1>
      <button onClick={handleClick}>
        <p>{joke}</p>
      </button>
    </div>
  );
};

export default DemoComponent;
