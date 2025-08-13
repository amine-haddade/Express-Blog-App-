import type { Post } from "../Types/postType.js";
import { readJSON, writeJSON } from "../utils/fileUtils.js";

const dataFile = "src/Data/posts.json";

// get alla posts
export const getAllPosts = async (): Promise<Post[] > => {
  const posts = await readJSON<Post[]>(dataFile);
  return posts  ;
};

// get single post 
export const getPostById = async (id: number): Promise<Post | undefined> => {
  const posts = await getAllPosts();
  return posts.find((ele) => ele.id === id);
};


// Crée un post
export const createPost = async (payload: Pick<Post, 'title' | 'content'>): Promise<Post> => {
  const posts : Post[]   = await getAllPosts()
  const newPost: Post = {
    id : posts.length > 0 ? (posts[posts.length - 1]!.id + 1) : 1,
    title: payload.title,
    content: payload.content,
    createdAt: new Date().toISOString()
  };
  posts.push(newPost);
  await writeJSON(dataFile, posts);
  return newPost;
};



// Met à jour un post
export const updatePost = async (id: number, payload: Partial<Pick<Post, 'title' | 'content'>>): Promise<Post | null> => {
  const posts = await getAllPosts();
  const idx = posts.findIndex(p => p.id === id);
  if (idx === -1) return null;
  const existingPost: Post = posts[idx]! ;
  const updated: Post = { 
    ...existingPost,
    ...payload,
    updatedAt: new Date().toISOString()
  };
  posts[idx] = updated;
  await writeJSON(dataFile, posts);
  return updated;
};

// Supprime un post
export const deletePost = async (id: number): Promise<Post | null> => {
  const posts = await getAllPosts();
  const idx = posts.findIndex(p => p.id === id);
  if (idx === -1) return null;
  const removed = posts.splice(idx, 1)[0];
  await writeJSON(dataFile, posts);
  return removed ?? null; 
};
