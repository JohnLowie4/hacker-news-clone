import { useEffect, useState } from "react";
import ArticleItem from "./ArticleItem";
import { fetchTopStories } from "../services/api-services";

function ArticleItemList() {
  return (
    <div>
      <h1>Article Item List</h1>
      <ArticleItem />
    </div>
  );
}

export default ArticleItemList;