import styled from "styled-components";

const InputContainer = styled.div`
  width: 20rem;
  padding: 1rem 0;
`;
const Label = styled.label`
  width: 100%;
`;
const Placeholder = styled.span`
  position: absolute;
  margin: -1rem calc(11rem / 2);
  background-color: ${(props) => props.theme.colors.ocean};
  // opacity: .8;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  width: 7rem;
  color: ${(props) => props.theme.colors.turquoise};
`;
const Inp = styled.input`
  width: 100%;
  // background-color: #00000000;
  padding: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.turquoise};
  color: ${(props) => props.theme.colors.ocean};
`;

export default function Input({ placeholder }) {
  return (
    <InputContainer>
      <Label>
        <Placeholder>{placeholder}</Placeholder>
        <Inp />
      </Label>
    </InputContainer>
  );
}
