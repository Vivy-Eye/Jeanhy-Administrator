import styled from "styled-components";
import Input from "./Input/Input";

const Form = styled.div`
  background-color: ${(props) => props.theme.colors.ocean};
  border: solid 1px gray;
  border-radius: 1rem;
  height: 15.5rem;
  padding: 1rem;
  width: 20rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;
const Title = styled.h2`
  text-align: center;
  font-famaly: ${(props) => props.theme.fonts.title};
  width: 20rem;
  color: ${(props) => props.theme.colors.sun};
  font-size: 36px;
  font-weight: 600;
`;
const SubTitle = styled.h4`
  text-align: center;
  padding-bottom: 1rem;
  font-famaly: ${(props) => props.theme.fonts.title};
  width: 20rem;
  color: ${(props) => props.theme.colors.sun};
  font-size: 16px;
  font-weight: 600;
`;
const Submit = styled.button`
  width: 7rem;
  background-color: ${(props) => props.theme.colors.ocean};
  height: 2rem;
  color: ${(props) => props.theme.colors.sun};
  border: solid 1px ${(props) => props.theme.colors.sun};
  font-size: 16px;
  border-radius: 1rem;
`;

export default function LoginTemplate() {
  return (
    <Form>
      <Title>Hi!</Title>
      <SubTitle>Mark!</SubTitle>
      <Input placeholder="Some" />
      <Input placeholder="Bear" />
      <Submit>Go</Submit>
    </Form>
  );
}
