import PageMainTemplate from "../../components/PageMainTemplate/PageMainTemplate"
import PostWithComments from "../../components/PostsTemplates/PostWithComments"

export default function Comments({ post, comments }) {
  return (
    <PageMainTemplate title="Posts">
      <PostWithComments post={post} comments={comments}/>
    </PageMainTemplate>
  );
}

export async function getServerSideProps(context) {
  const post = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  const comments = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${context.params.id}/comments`
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return {
    props: { post, comments },
  };
}
