import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";
import { GetStaticPropsContext } from "next";

interface Params {
  id: string;
}

export default function Page({ params }: { params: Params }) {
  const post = posts.find((post) => post.id === params.id);
  if (!post || !post.id || !post.title || !post.content || !post.date) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <h1>Post</h1>
      <Post {...post} />
    </>
  );
}
