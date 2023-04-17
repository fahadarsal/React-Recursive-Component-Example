import React, { useState } from "react";

const Comment = ({ comment, children, level }) => {
  const [showReplies, setShowReplies] = useState(false);

  const handleShowReplies = () => {
    setShowReplies((prev) => !prev);
  };

  const paddingLeft = level * 20; // 20px indentation per nesting level

  return (
    <div style={{ paddingLeft }}>
      <div>{comment.text}</div>
      {comment.replies && comment.replies.length > 0 && (
        <a
          style={{
            fontSize: 10,
            paddingLeft: 50,
          }}
          onClick={handleShowReplies}
        >
          {showReplies ? "Hide Replies" : "Show Replies"}
        </a>
      )}
      {showReplies && children}
    </div>
  );
};

export default Comment;
