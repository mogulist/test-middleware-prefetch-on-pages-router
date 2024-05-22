// pages/posts.js

import React from "react";
import Link from "next/link";

// Fetch data using getStaticProps
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

// Component to display the list of posts
const Posts = ({ posts }) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
