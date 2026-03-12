import ContentDisplay from "@/components/ContentDisplay.jsx";
import React from "react";

const subContentPage = ({ params: { subContentId } }) => {
  return (
    <>
      <ContentDisplay id={subContentId} />
    </>
  );
};

export default subContentPage;
