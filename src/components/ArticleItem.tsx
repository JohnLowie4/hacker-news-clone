type ArticleItemProps = {
  index: number;
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
  url: string;
};

function ArticleItem(props: ArticleItemProps) {

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
    <div id={`article-item-${props.id}`}>
      <div id="article-item-header">
        <span id={`article-item-ordered-${props.index}`}>{props.index}</span>
        <a href={`https://news.ycombinator.com/vote?id=${props.id}&how=up&goto=news`}>
          <img src="src/assets/triangle.svg" />
        </a>
        <a id="article-item-title" href={props.url}>
          <span>{props.title}</span>
        </a>
        <a id="article-item-source" href={props.url}>
          <span>({formatUrl(props.url)})</span>
        </a>
      </div>
      <div id="article-item-subInfo">
        <span>{props.score}</span>
        {" by "}
        <a href={`https://news.ycombinator.com/user?id=${props.by}`}>{props.by}</a>
        {" "}
        {/* Perhaps I can go back and set this up so that it does redirect to a different page */}
        <span>{getHoursAgo(props.time)} hours ago</span>
        {' | '}
        {/* Perhaps I can come back and set this up so that it does redirect to a different page */}
        <a>hide</a>
        {' | '}
        <a href={`https://news.ycombinator.com/item?id=${props.id}`}>
          <span>{props.descendants} comments</span>
        </a>
      </div>
    </div>
  );
}

export default ArticleItem;