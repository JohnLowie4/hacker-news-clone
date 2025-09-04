function UniversalFooter() {
  return (
    <div className="mt-[10px] border-t border-orange-500">
      <center className="my-2.5">
        <span className="text-[0.667rem]">
          <a href="https://news.ycombinator.com/newsguidelines.html">Guidlines</a>
          {' | '}
          <a href="https://news.ycombinator.com/newsfaq.html">FAQ</a>
          {' | '}
          <a href="https://news.ycombinator.com/lists">Lists</a>
          {' | '}
          <a href="https://github.com/HackerNews/API">API</a>
          {' | '}
          <a href="https://news.ycombinator.com/security.html">Security</a>
          {' | '}
          <a href="https://www.ycombinator.com/legal/">Legal</a>
          {' | '}
          <a href="https://www.ycombinator.com/apply/">Apply to YC</a>
          {' | '}
          <a href="mailto:hn@ycombinator.com">Contact</a>
        </span>
      </center>
      <form className="pb-3" method="get" action="https://hn.algolia.com/">
        <span>Search:</span>
        <input id="search" type="text" className="bg-white border-1 rounded-xs px-0.5 py-0.25 w-[149px] h-[21.5px] ml-1"/>
      </form>
    </div>
  );
}

export default UniversalFooter;