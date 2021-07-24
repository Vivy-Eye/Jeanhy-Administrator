import styled from "styled-components";
import Image from "next/image";
import image from "/public/avatar.png";

const PersonContainer = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const PersonName = styled.div`
  font-size: 1.2rem;
  font-famaly: ${props => props.theme.fonts.named}
  color: ${(props) => props.theme.colors.sun};
`;
const Avatar = styled.div`
  border-radius: 50%;
  height: 64px;
  width: 64px;
`;
const AvatarImage = styled.div`
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

export default function Person() {
  return (
    <PersonContainer>
      <PersonName>Ilon Blaskovich</PersonName>
      <Avatar>
        <AvatarImage>
          <Image src={image} alt="#" />
        </AvatarImage>
      </Avatar>
    </PersonContainer>
  );
}
