import PageMainTemplate from "../components/PageMainTemplate/PageMainTemplate";
import PostsCard from "../components/PostsTemplates/PostsCard";

export default function Posts({ posts }) {
  return (
    <PageMainTemplate title="Posts">
      <PostsCard posts={posts}/>
    </PageMainTemplate>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(`http://jsonplaceholder.typicode.com/posts`);
  const posts = await response.json();
  return {
    props: { posts },
  };
}
