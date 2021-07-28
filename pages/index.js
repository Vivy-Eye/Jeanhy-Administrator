import styled from "styled-components";
import LoginTemplate from "../components/LoginTemplate/LoginTemplate";
import Link from "next/link";

const Background = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.ocean};
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <Background>
      <LoginTemplate />
      <Link href="/users">To Peges</Link>
    </Background>
  );
}
