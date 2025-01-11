import { useState } from "react";
import axios from "axios";

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `http://localhost:4001/posts/${postId}/comments`,
      {
        content,
      }
    );

    console.log(res.data);

    setContent("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">New Comment</label>
          <input
            value={content}
            type="text"
            name=""
            onChange={(e) => setContent(e.target.value)}
            id=""
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
