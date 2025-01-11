import { useEffect, useState } from "react";
import axios from "axios";

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    console.log(res.data);
    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      {comments.map((comment) => {
        return <li key={comment.id}>{comment.content}</li>;
      })}
    </div>
  );
}
