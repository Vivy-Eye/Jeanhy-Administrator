import { useRouter } from "next/dist/client/router";
import MainTemplate from "../../components/MainTemplate/MainTemplate";

export default function User({user}) {
  const router = useRouter()

  return (
    <MainTemplate headTitle={user.name}>
      <h1>{router.query.id}</h1>
      <p>{user.name}</p>
    </MainTemplate>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
  const user = await response.json()
  return {
    props: {user},
  }
}