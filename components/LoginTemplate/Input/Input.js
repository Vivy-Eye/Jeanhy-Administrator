import styled from "styled-components";

const InputContainer = styled.div`
  padding: 1rem 0;
  width: 20rem;
`;
const Label = styled.label`
  width: 100%;
`;
const Placeholder = styled.span`
  background-color: ${(props) => props.theme.colors.ocean};
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.turquoise};
  display: flex;
  justify-content: center;
  margin: -1rem calc(11rem / 2);
  position: absolute;
  width: 7rem;
`;
const Inp = styled.input`
  background-color: ${(props) => props.theme.colors.turquoise};
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.ocean};
  font-size: 1.2rem;
  padding: 0.5rem;
  text-align: center;
  width: 100%;
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
