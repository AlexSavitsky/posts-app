import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Header from "../components/header/Header";
import ItemsList from "../components/itemsList/ItemsList";

import JsonPlaceholderService from "../services/JsonPlaceholder";

const CommentsPage = () => {
  const params = useParams();

  const { getCommentsByPostId } = JsonPlaceholderService();
  const [comments, setCommnets] = useState(null);

  useEffect(() => {
    setCommnets(null);
    fetchComments();
  }, [params.id]);

  const fetchComments = async () => {
    const comments = await getCommentsByPostId(params.id);
    setCommnets(comments);
  };

  return (
    <div className="comments-page">
      <Header
        title={`Comments for post ${params.id}`}
        element={<Link to="/">← Back</Link>}
      />

      <ItemsList data={comments} />
    </div>
  );
};

export default CommentsPage;
