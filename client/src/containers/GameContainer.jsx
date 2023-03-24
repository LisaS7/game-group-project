import { useState, useEffect } from "react";
import QuizContainer from "./QuizContainer";

export default function GameContainer() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  async function getData() {
    const url = `https://the-trivia-api.com/api/questions?${
      category && `categories=${category}`
    }limit=50${difficulty && `difficulty=${difficulty}`}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    setData(jsonData);
  }

  useEffect(() => {
    getData();
  }, []);

  if (!data.length) return "loading...";

  return (
    <div>
      <QuizContainer data={data} />
    </div>
  );
}
