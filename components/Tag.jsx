import Link from "next/link.js";
import React from "react";

const Tag = ({ tag }) => {
  return (
    <Link
      href={`/tags/${tag}`}
      className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
    >
      {tag}
    </Link>
  );
};

export default Tag;
