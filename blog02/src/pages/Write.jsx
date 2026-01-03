import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from '../components/PostForm.jsx';



function Write({ addPost }) {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ id: Date.now(), title, content, category });
    navigate("/posts");
  };

  return (

       <div>
      <PostForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        category={category}
        setCategory={setCategory}
      />
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 mg-10 rounded"
         onClick={handleSubmit}
        >작성</button>
        </div>
      
    </div>


  )
}

export default Write