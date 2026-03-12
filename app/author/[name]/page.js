import ContentDisplay from "@/components/ContentDisplay.jsx";
import { getPostsData } from "@/lib/doc.js";
import { getDocsByAuthor } from "@/utils/utils.js";

const AuthorPage = ({ params: { name } }) => {
  const docs = getPostsData();
  const matchDocs = getDocsByAuthor(docs, name);
  return (
    <>
      <ContentDisplay id={matchDocs[0].id} />
    </>
  );
};

export default AuthorPage;
