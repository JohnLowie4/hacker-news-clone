import { useEffect, useState } from "react";
import axios from "axios";
import ArticleItem from "./ArticleItem";

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

  function itemList () {
    const itemListArray: React.ReactNode[] = [];
    
    for (let i = 0; i < 30; i++) {
      itemListArray.push(<ArticleItem itemId={topStories[i]} index={i + 1} />);
    }

    return itemListArray;
  }

  return (
    <div id="article-item-list" className="mt-[5px]">
      {topStories.length > 0 ? itemList() : "Loading top stories..."}
    </div>
  );
}

export default ArticleItemList;