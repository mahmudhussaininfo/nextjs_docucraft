import { getDocumentContent } from "@/lib/doc.js";
import Link from "next/link.js";
import React from "react";
import Tag from "./Tag.jsx";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentContent(id);

  return (
    <>
      <article className>
        <h1 className="text-3xl font-bold mb-4">{documentContent.title}</h1>
        <div>
          <span>Pulished on: {documentContent.date}</span>
          <span> by </span>{" "}
          <Link
            className="text-red-400"
            href={`/author/${documentContent.author}`}
          >
            {documentContent.author}
          </Link>
          <span> under the testing </span>{" "}
          <Link
            className="text-red-400"
            href={`/category/${documentContent.category}`}
          >
            {documentContent.category}
          </Link>{" "}
          <span>category.</span>
        </div>
        <div className="my-4">
          {documentContent.tags &&
            documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
        </div>
        <div
          className="lead"
          dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
        />
      </article>
    </>
  );
};

export default ContentDisplay;
