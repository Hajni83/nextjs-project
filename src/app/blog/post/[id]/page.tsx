import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

interface Params {
  id: string;
}

interface PageProps {
  params: Params;
}

export default function Page({ params }: PageProps) {
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
