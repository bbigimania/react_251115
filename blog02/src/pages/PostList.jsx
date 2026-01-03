import { Link } from "react-router-dom";
import { useState } from "react";

function PostList({ posts }) {
  const [category, setCategory] = useState("all");

  const filtered = category === "all"
    ? posts
    : posts.filter(p => p.category === category);

  return (
    <div className="space-y-4">
      <select
        className="border bg-sky-50 p-2 rounded shadow"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="all">전체</option>
        <option value="react">React</option>
        <option value="router">Router</option>
        <option value="css">CSS</option>
      </select>

      {filtered.map(post => (
        <Link
          key={post.id}
          to={`/posts/${post.id}`}
          className="block p-4 bg-white rounded shadow"
        >
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-sm">#{post.category}</p>
        </Link>
      ))}
    </div>
  );
}

export default PostList;