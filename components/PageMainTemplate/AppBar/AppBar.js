import styled from "styled-components";
import Link from "next/link";

const pages = ["users", "posts", ];

const AppBarContainer = styled.div``;
const AppList = styled.div`
  align-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: calc(3rem * ${pages.length});
  justify-content: center;
`;
const Button = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.colors.turquoise};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  height: 2.5rem;
  justify-content: center;
  text-transform: capitalize;
  width: 10rem;
`;

const LayOut = styled.div``;

export default function AppBar() {
  return (
    <AppBarContainer>
      <AppList>
        {pages.map((page, i) => (
          <Link href={"/" + page} key={i}>
            <Button>{page}</Button>
          </Link>
        ))}
      </AppList>
      {/* <LayOut>
        <Link href="/">LayOut</Link>
      </LayOut> */}
    </AppBarContainer>
  );
}
