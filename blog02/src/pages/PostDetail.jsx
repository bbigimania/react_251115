import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import ConfirmModal from '../components/ConfirmModal.jsx';


function PostDetail({ posts, deletePost }) {

  
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === Number(id));
  const [open, setOpen] = useState(false);

  if (!post) {
  return (
    <>
      <p>존재하지 않는 글입니다.</p>
      <Link to="/posts">목록으로</Link>
    </>
  );
 }
  // const remove = () => {
  //   if (confirm("정말 삭제할까요?")) {
  //     deletePost(post.id);
  //     navigate("/posts");
  //   }
  // };

    const handleDelete = () => {
    deletePost(post.id);
    navigate("/posts");
  };


  return (
   <>
     <article className="bg-white p-6 rounded shadow space-y-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-sm">#{post.category}</p>
      <p>{post.content}</p>

      <div className="flex gap-2">
        <Link to={`/edit/${post.id}`} className="px-3 py-1 bg-blue-500 text-white rounded">
          수정
        </Link>
        <button
          // onClick={remove}
          onClick={()=>setOpen(true)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          삭제
        </button>
      </div>
    </article>
    <ConfirmModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
      />
 </>
  );
}



export default PostDetail