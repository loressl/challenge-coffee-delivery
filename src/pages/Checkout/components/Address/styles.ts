import styled from "styled-components";

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 18px;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 15px;
  }

  & .box-address {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40rem;
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px;
    margin-bottom: 12px;
    gap: 2rem;
    padding: 40px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1rem;
  width: 35rem;
  align-self: stretch;

  & .complement {
    display: flex;
    gap: 0.75rem;
    width: 100%;
  }
`;

interface InputContainerProps {
  widthCustom: string;
}

export const InputWrapper = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: ${(props) => props.widthCustom};
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.75rem;
  width: ${(props) => props.widthCustom};
  background: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  border-radius: 4px;
  position: relative;
  justify-content: end;

  span {
    font-size: 12px;
    color: ${props => props.theme["base-label"]};;
    position: absolute;
    right: 12px;
    font-style: italic;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  color: ${(props) => props.theme["base-text"]};
  flex-grow: 1;
  width: inherit;
  background: none;
  border: none;
  padding: 0.75rem;
  border-radius: inherit;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;