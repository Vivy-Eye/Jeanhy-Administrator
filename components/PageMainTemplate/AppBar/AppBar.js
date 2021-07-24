import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import image from "/public/vercel.svg";

const AppBarContainer = styled.div``;

const AppList = styled.div`
  height: 12rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
`;

const Button = styled.button`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-size: 1.2rem;
  text-transform: capitalize;
  height: 2.5rem;
  width: 10rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.turquoise};
`;

const LayOut = styled.div``;

const pages = ["users", "posts", "images", "monsters"];

export default function AppBar() {
  return (
    <AppBarContainer>
      <AppList>
        {pages.map((page, i) => (
          <Link href={page} key={i}>
            <Button>{page}</Button>
          </Link>
        ))}
      </AppList>
      <LayOut>
        <Link href="/">LayOut</Link>
      </LayOut>
    </AppBarContainer>
  );
}
