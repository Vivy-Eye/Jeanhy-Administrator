import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Paragraph from "../../components/Paragraph";

export default function Comments({ post, comments }) {
  return (
    <MainTemplate headTitle="Post">
      <Paragraph title={post.title}>
        {post.body}
        <br />
        <br />

        {comments.map((comment) => (
          <Paragraph key={post.id} title={comment.name}>
            Comment: {comment.body} <br />
            From: {comment.email}
          </Paragraph>
        ))}
      </Paragraph>
    </MainTemplate>
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
