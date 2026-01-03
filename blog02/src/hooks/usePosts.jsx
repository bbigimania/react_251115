import { useState, useEffect } from 'react';
import { initialPosts } from '../data/posts';


const STORAGE_KEY= "posts";


export function usePosts() {
  const [posts, setPosts] = useState(
    () => {
        try { //예외가 발생할 수 있는 코드
            const savedPosts = localStorage.getItem(STORAGE_KEY);
            return savedPosts ? JSON.parse(savedPosts) : initialPosts;
        } catch (error) {// 예외가 발생했을 떄 실행할 코드
            console.error("Failed to load posts from localStorage:", error);
            return initialPosts;
        }
    }
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);


  const addPost = (newPost) => {
    setPosts(prev => [...prev, newPost]);
  };

const updatePost = (updatedPost) => {
    setPosts(prev =>
      prev.map(post => (post.id === updatedPost.id ? updatedPost : post))
    );
  }

  const deletePost = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

return { posts, addPost, updatePost, deletePost };
 }