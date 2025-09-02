import axios from "axios";
import { useState, useEffect } from "react";

async function fetchTopStories(): Promise<number[]> {
  const [response, setResponse] = useState<number[]>([]);

  useEffect(() => {
    axios.get<number[]>("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((res) => {
        setResponse((prev) => res.data );
      }).catch((error) => {
        console.error("Error fetching top stories:", error);
      });
  }, []);

  return response;
}

export { fetchTopStories };