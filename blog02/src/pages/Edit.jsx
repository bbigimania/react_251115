import {useParams, useNavigate} from "react-router-dom";
import { useState } from "react";





function Edit({ posts, updatePost }) {

const { id } = useParams();
const navigate = useNavigate();
const post = posts.find(p => p.id === Number(id));

const [title, setTitle] = useState(post.title);
const [content, setContent] = useState(post.content);
const [category, setCategory] = useState(post.category);

const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
             handleSubmit(e);
             console.log('enter 입력');
    }
  };

 const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    updatePost({ id: post.id, title, content, category });
    navigate(`/posts/${post.id}`);
  };

  return (
    <div className="space-y-4">
      <input
        className="border bg-sky-50 p-2 w-full"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <textarea
        className="border bg-sky-50 p-2 w-full"
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <select
        className="border bg-sky-50 p-2 mr-2 rounded"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="react">React</option>
        <option value="router">Router</option>
        <option value="css">CSS</option>
      </select>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        수정 완료
      </button>
    </div>
  );
}

export default Edit
