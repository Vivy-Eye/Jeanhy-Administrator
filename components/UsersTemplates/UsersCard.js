import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import image from "/public/avatar.png";

const UsersCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;
`;
const UserCard = styled.div`
justify-content: space-evenly;
  align-items: center;
display: flex;
height: 5rem;
width: 10rem;
  color: ${(props) => props.theme.colors.postBlack};
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.ocean};
`;
const Title = styled.p`
  padding: 1rem;
  color: ${(props) => props.theme.colors.underRed};
`;
const Avatar = styled.div`height: 5rem;
width: 5rem;`;

export default function UsersCard({ users }) {
  return (
    <UsersCardContainer>
      {users.map((user, i) => (
        <UserCard key={i}>
          <Title>
            {user.name} : {user.id}
          </Title>
          <Avatar>
            <Link href={`users/${user.id}`}>
              <Image src={image} alt="#" />
            </Link>
          </Avatar>
        </UserCard>
      ))}
    </UsersCardContainer>
  );
}
