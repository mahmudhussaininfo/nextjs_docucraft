import ContentDisplay from "@/components/ContentDisplay.jsx";
import { getPostsData } from "@/lib/doc.js";
import { getDocsByCategory } from "@/utils/utils.js";
import React from "react";

const categoryPage = ({ params: { name } }) => {
  const docs = getPostsData();
  const matchDocs = getDocsByCategory(docs, name);
  return (
    <>
      <ContentDisplay id={matchDocs[0].id} />
    </>
  );
};

export default categoryPage;
