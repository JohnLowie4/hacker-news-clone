function UniversalHeader() {
  return (
    <div className="flex items-center bg-orange-500 p-[2px] text-black">
      <div className="mr-[5px]">
        <a href="https://news.ycombinator.com">
          <img className="block border border-solid border-white h-[20px] w-[20px]" src="src/assets/y18.svg" alt="Hacker News Logo"/>
        </a>
      </div>
      <div className="flex items-center h-[10px] leading-[16px]">
        <b className="mr-[5px]">Hacker News Clone</b>
        <span>
          <a>new</a>
          {' | '}
          <a>past</a>
          {' | '}
          <a>comments</a>
          {' | '}
          <a>ask</a>
          {' | '}
          <a>show</a>
          {' | '}
          <a>jobs</a>
          {' | '}
          <a>submit</a>
        </span>
      </div>
      <div className="text-right pr-[4px] ml-auto">
        <a href="https://news.ycombinator.com/login?goto=news">login</a>
      </div>
    </div>
  );
}

export default UniversalHeader;