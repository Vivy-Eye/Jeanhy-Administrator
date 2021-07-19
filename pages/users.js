import Link from "next/link";
import MainTemplate from "../components/MainTemplate/MainTemplate";
import Paragraph from "../components/Paragraph";

export default function Users({ users }) {
  return (
    <MainTemplate headTitle="Users">
      <Paragraph title="Users">Some users on my page</Paragraph>

      {users.map((user, i) => (
        <Paragraph key={i} title={user.name}>
          <Link href={`users/${user.id}`}>
            <a>
              Some user {user.name} with id {user.id}
            </a>
          </Link>
        </Paragraph>
      ))}
    </MainTemplate>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  return {
    props: { users },
  };
}
