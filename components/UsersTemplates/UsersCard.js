import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import image from "/public/avatar.png";

const UsersCardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const UserCard = styled.div`
  align-items: center;
  border-radius: 1rem;
  color: ${props => props.theme.colors.ocean}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 49%;
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
