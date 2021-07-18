import { useRouter } from "next/dist/client/router";
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Paragraph from "../../components/Paragraph";

export default function Comments({post, comments}) {
  const router = useRouter()

  return (
    <MainTemplate headTitle="Post">
      <Paragraph title={post.title} text={post.body} />

      {comments.map(comment =>
        <div className="comment" key={post.id}>
          <Paragraph title={comment.name} text={comment.body}/>
          <p>From: {comment.email}</p>
        </div>
      )}
    </MainTemplate>
  )
}

export async function getServerSideProps(context) {
  const post = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    .then(response => response.json())
    .catch(err => console.log(err))
  const comments = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}/comments`)
    .then(response => response.json())
    .catch(err => console.log(err))

  return {
    props: {post, comments},
  }
}