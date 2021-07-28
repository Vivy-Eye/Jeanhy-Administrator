import PageMainTemplate from "../components/PageMainTemplate/PageMainTemplate";
import UsersCard from "../components/UsersTemplates/UsersCard";

export default function Users({ users }) {
  return (
    <PageMainTemplate title="Users">
      <UsersCard users={users} />
    </PageMainTemplate>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  return {
    props: { users },
  };
}
