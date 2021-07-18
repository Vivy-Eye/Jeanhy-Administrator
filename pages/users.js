import Link from "next/link";
import MainTemplate from "../components/MainTemplate/MainTemplate";
import Paragraph from "../components/Paragraph";

export default function Users({users}) {
  return (
    <MainTemplate headTitle="Users">
      <Paragraph title="Users" text="Some users on my page"/>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link href={`users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        )}
      </ul>
    </MainTemplate>
  )
}

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await response.json()
  return {
    props: {users},
  }
}