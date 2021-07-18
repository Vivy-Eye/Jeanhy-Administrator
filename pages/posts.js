import Link from "next/link";
import MainTemplate from "../components/MainTemplate/MainTemplate";
import Paragraph from "../components/Paragraph";

export default function Posts({posts}) {
  return (
    <MainTemplate headTitle="Users">
      <Paragraph title="Users" text="Some users on my page"/>

      {posts.map(post =>
        <div className="post" key={post.id}>
          <Paragraph title={post.title} text={post.body}/>
          <Link href={`posts/${post.id}`}>
            <a>Comments</a>
          </Link>
        </div>
      )}
    </MainTemplate>
  )
}

export async function getStaticProps(context) {
  const response = await fetch(`http://jsonplaceholder.typicode.com/posts`)
  const posts = await response.json()
  return {
    props: {posts},
  }
}