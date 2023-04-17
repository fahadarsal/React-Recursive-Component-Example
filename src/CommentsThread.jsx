import React from "react";
import Comment from "./Comments";

const CommentsThread = ({ comments, level = 0 }) => {
  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} level={level}>
          {/* Increase the level prop for nested replies */}
          <CommentsThread comments={comment.replies} level={level + 1} />
        </Comment>
      ))}
    </>
  );
};

export default CommentsThread;
