/**
 * 메모이제이션(Memoization)
 * - 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을
 * 메모리에 저장 -> 동일한 계산의 반복 수행 제거 & 프로그램 실행 속도↑
 */

import React, { useState, useEffect } from "react";
import CommentItem from "./CommentItem";
import Comments from "./Comments";

const commentList = [
  { title: "Comment 1", content: "Message 1", likes: 1 },
  { title: "Comment 2", content: "Message 2", likes: 1 },
  { title: "Comment 3", content: "Message 3", likes: 1 },
];

export default function Memo() {
  const [comments, setComments] = useState(commentList);

  useEffect(() => {
    console.log("?");
    const interval = setInterval(() => {
      setComments((prev) => [
        ...prev,
        {
          title: `Comment ${prev.length + 1}`,
          content: `Message ${prev.length + 1}`,
          likes: 1,
        },
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {commentList.map((comment) => {
        return (
          <CommentItem
            key={comment.title}
            title={comment.title}
            content={comment.content}
            likes={comment.likes}
          />
        );
      })}
    </div>
  );
  // return <Comments commentList={comments} />;
}
