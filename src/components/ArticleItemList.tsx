import { useEffect, useState } from "react";
import axios from "axios";

function ArticleItemList() {
  const [topStories, setTopStories] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get<number[]>("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
        .then((res) => {
          setTopStories(res.data as number[]);
        }).catch((error) => {
          console.error("Error fetching top stories:", error);
        });
    };

    fetchData();
  }, []);

  

  return (
    <div>
      <h1>Article Item List</h1>
      {topStories.length > 0 ? "Top stories fetched successfully!" : "Loading top stories..."}
    </div>
  );
}

export default ArticleItemList;