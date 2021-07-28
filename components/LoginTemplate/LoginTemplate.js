import styled from "styled-components";
import Input from "./Input/Input";

const Form = styled.div`
  align-content: flex-start;
  background-color: ${(props) => props.theme.colors.ocean};
  border-radius: 1rem;
  border: solid 1px gray;
  display: flex;
  flex-wrap: wrap;
  height: 15.5rem;
  justify-content: center;
  padding: 1rem;
  width: 20rem;
`;
const Title = styled.h2`
  color: ${(props) => props.theme.colors.sun};
  font-famaly: ${(props) => props.theme.fonts.title};
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  width: 20rem;
`;
const SubTitle = styled.h4`
  color: ${(props) => props.theme.colors.sun};
  font-famaly: ${(props) => props.theme.fonts.title};
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 1rem;
  text-align: center;
  width: 20rem;
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
