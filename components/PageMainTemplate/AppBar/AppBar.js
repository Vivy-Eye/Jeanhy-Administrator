import styled from "styled-components";
import Image from "next/image";
import image from "/public/vercel.svg";

const AppBarContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: .2rem 0;
  font-size: 1.2rem;
  height: 3rem;
  width: 20rem;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.turquoise}
`;

export default function AppBar() {
  return (
    <AppBarContainer>
      <Button>Tables</Button>
      <Button>Functions</Button>
      <Button>Collections</Button>
    </AppBarContainer>
  );
}
