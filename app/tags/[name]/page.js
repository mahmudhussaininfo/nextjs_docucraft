import ContentDisplay from "@/components/ContentDisplay.jsx";
import { getPostsData } from "@/lib/doc.js";
import { getDocsByTag } from "@/utils/utils.js";
import React from "react";

const TagsPage = ({ params: { name } }) => {
  const docs = getPostsData();
  const matchDocs = getDocsByTag(docs, name);

  return (
    <div>
      <ContentDisplay id={matchDocs[0].id} />
    </div>
  );
};

export default TagsPage;
