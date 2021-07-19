import Link from "next/link";
import MainTemplate from "../components/MainTemplate/MainTemplate";
import Paragraph from "../components/Paragraph";

export default function Posts({ posts }) {
  return (
    <MainTemplate headTitle="Posts">
      <Paragraph title="Posts" />

      {posts.map((post) => (
        <Paragraph key={post.id} title={post.title}>
          {post.body}
          <br />
          <br />

          <Link href={`posts/${post.id}`}>
            <a>- Comments -</a>
          </Link>
        </Paragraph>
      ))}
    </MainTemplate>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(`http://jsonplaceholder.typicode.com/posts`);
  const posts = await response.json();
  return {
    props: { posts },
  };
}
