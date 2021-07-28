import styled from "styled-components";
import Image from "next/image";
import image from "/public/avatar.png";
import Link from "next/link";

const PersonContainer = styled.div`
  align-items: center;
  display: flex;
  height: 7rem;
  justify-content: space-evenly;
  padding: 0 1rem;
`;
const PersonName = styled.h2`
  color: ${(props) => props.theme.colors.sun};
  font-famaly: ${(props) => props.theme.fonts.title};
  font-size: 1rem;
`;
const Avatar = styled.div`
  background-color: ${(props) => props.theme.colors.orange};
  border-radius: 50%;
  height: ${(props) => props.theme.sizes.icon};
  width: calc(${(props) => props.theme.sizes.icon} + 25px);
  img {
    height: ${(props) => props.theme.sizes.icon};
    width: calc(${(props) => props.theme.sizes.icon} + 25px);
  }
`;

export default function Person() {
  return (
    <PersonContainer>
      <PersonName>Klavrentiy Blaskovich</PersonName>
      <Avatar>
        <Link href="/">
          <Image src={image} alt="^.^" />
        </Link>
      </Avatar>
    </PersonContainer>
  );
}
