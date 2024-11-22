// pages/posts-isr/[id].js

import { useRouter } from "next/router";

// Fetch data from an API
async function fetchPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function getStaticPaths() {
  const paths = Array.from({ length: 10 }, (_, i) => ({
    params: { id: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: "blocking", // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  const post = await fetchPost(Math.floor(Math.random() * 100) + 1);

  if (!post) {
    return {
      notFound: true,
    };
  }

  console.log("[ISR] Generating page for post:", params.id);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("    timeout:", params.id);

  return {
    props: {
      post,
    },
    revalidate: 10, // Revalidate every 10 seconds
  };
}

export default function PostISRPage({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}
