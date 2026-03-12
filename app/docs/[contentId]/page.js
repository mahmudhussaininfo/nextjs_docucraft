import ContentDisplay from "@/components/ContentDisplay.jsx";
import React from "react";

const contentPage = ({ params: { contentId } }) => {
  return (
    <>
      <ContentDisplay id={contentId} />
    </>
  );
};

export default contentPage;
