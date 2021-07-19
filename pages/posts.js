import Link from "next/link";
import MainTemplate from "../components/MainTemplate/MainTemplate";
import Paragraph from "../components/Paragraph";

export default function Posts({ posts }) {
  return (
    <MainTemplate headTitle="Posts">
      <Paragraph title="Posts" />

      {posts.map((post, i) => (
        <Paragraph key={i} title={post.title}>
          {post.body}
          <br />
          <br />

          <Link href={`posts/${post.id}`}>
            <a className="link">Click here - Comments -</a>
          </Link>
        </Paragraph>
      ))}
      <style jsx>
        {`
          .link {
            color: blue;
          }
        `}
      </style>
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
