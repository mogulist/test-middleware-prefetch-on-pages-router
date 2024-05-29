// pages/posts/[id].js

import React from "react";
import { useRouter } from "next/router";

// Fetch data using getServerSideProps
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  console.log("[SSR] Generating page for post:", post.id);

  return {
    props: {
      post,
    },
  };
}

const PostDetail = ({ post }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed initially
  // until getServerSideProps finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default PostDetail;
