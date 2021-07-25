import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import image from "/public/avatar.png";

const UsersCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const UserCard = styled.div`
  width: 49%;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 1rem;
  // border: solid 1px ${props => props.theme.colors.orange}
  color: ${props => props.theme.colors.ocean}
`;
const Title = styled.h2`
  padding: 1rem;
`;
const Avatar = styled.div`
  height: 5rem;
  width: 5rem;
`;

export default function UsersCard({ users }) {
  return (
    <UsersCardContainer>
      {users.map((user, i) => (
        <UserCard key={i}>
          <Title>
            {user.id} : {user.name}
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
