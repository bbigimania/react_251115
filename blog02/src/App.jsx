import { Routes, Route  } from "react-router-dom";
//import { useState } from "react";
import Layout from "./components/Layout";
import HomePage from './pages/HomePage.jsx';
import PostList from './pages/PostList.jsx';
import PostDetail from './pages/PostDetail.jsx';
import Write from './pages/Write.jsx';
import Edit from './pages/Edit.jsx';
//import { initialPosts } from './data/posts.js';
import './App.css';
import { usePosts } from './hooks/usePosts.jsx';

function App() {
  // const [posts, setPosts] = useState(initialPosts);

  // const addPost = (post) => setPosts([post, ...posts]);
  // const updatePost = (updated) =>
  //   setPosts(posts.map(p => (p.id === updated.id ? updated : p)));
  // const deletePost = (id) =>
  //   setPosts(posts.filter(p => p.id !== id));
  const { posts, addPost, updatePost, deletePost } = usePosts();

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostList posts={posts} />} />
        <Route
          path="/posts/:id"
          element={<PostDetail posts={posts} deletePost={deletePost} />}/>
        <Route path="/write" element={<Write addPost={addPost} />} />
        <Route
          path="/edit/:id"
          element={<Edit posts={posts} updatePost={updatePost} />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

