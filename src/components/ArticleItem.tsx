import { useEffect, useState } from "react";
import axios from "axios";

type ArticleData = {
  by: string | null;
  descendants: number | null;
  id: number;
  kids: number[] | null;
  score: number | null;
  text: string | null;
  time: number | null;
  title: string | null;
  type: string | null;
  url: string | null;
};

function ArticleItem(props: { itemId: number; index: number }): React.JSX.Element {
  const [articleData, setArticleData] = useState<ArticleData | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      await axios.get<ArticleData>(`https://hacker-news.firebaseio.com/v0/item/${props.itemId}.json?print=pretty`)
        .then((res) => {
          setArticleData(res.data as ArticleData);
        }).catch((error) => {
          console.error("Error fetching top stories:", error);
        });
    };

    fetchData();
  }, []);

  // Function to format URL to display only the hostname without "www."
  function formatUrl(url: string): string {
    const hostname = new URL(url).hostname;
    if (hostname.startsWith("www.")) {
      return hostname.slice(4);
    }
    return hostname
  }

  // Function to calculate hours ago from a given time unit (in seconds)
  function getHoursAgo(timeUnit: number): number {
    const currentTime = Math.floor(Date.now() / 1000);
    const timeDifference = currentTime - timeUnit;
    const hoursAgo = Math.floor(timeDifference / 3600);
    return hoursAgo;
  }

  return (
    <div id={`article-item-${articleData?.id}`} className="h-4.5 mb-[5px]">
      <div id="article-item-header">
        <span id={`article-item-ordered-${props.index}`}>{props.index}.</span>
        <a href={`https://news.ycombinator.com/vote?id=${articleData?.id}&how=up&goto=news`}>
          <img src="src/assets/triangle.svg" width="10" height="10" alt="upvote" className="mx-0.5 mt-[3px] mb-1.5"/>
        </a>

        {articleData?.url && (<><a id="article-item-title" href={articleData?.url}>
          <span>{articleData?.title}</span>
        </a>
        <a id="article-item-source" href={articleData?.url}>
          <span>({formatUrl(articleData?.url)})</span>
        </a></>)}

        
      </div>
      <div id="article-item-subInfo">
        <span>{articleData?.score}</span>
        {" by "}
        <a href={`https://news.ycombinator.com/user?id=${articleData?.by}`}>{articleData?.by}</a>
        {" "}
        {/* Perhaps I can come back and set this up so that it does redirect to a different page */}
        {articleData?.time && (<span>{getHoursAgo(articleData?.time)} hours ago</span>)}
        
        {' | '}
        {/* Perhaps I can come back and set this up so that it does redirect to a different page */}
        <a>hide</a>
        {' | '}
        <a href={`https://news.ycombinator.com/item?id=${articleData?.id}`}>
          <span>{articleData?.descendants} comments</span>
        </a>
      </div>
    </div>
  );
}

export default ArticleItem;