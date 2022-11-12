import { useState } from "react";

export default function ArticleEntry({ addArticle }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("Both the title and body must be supplied");
    } else {
      addArticle({ title, body });
    }
  }

  return (
    <div className="article__entry">
      {/* <div className="article__entry-container"> */}
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        <h2>Create An Article</h2>
        <div className="article__inputs">
          <label>Title:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="article__inputs">
          <label>Body:</label>
          <textarea
            rows="8"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
      {/* </div> */}
    </div>
  );
}
