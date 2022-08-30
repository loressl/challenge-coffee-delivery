import styled from "styled-components";

interface InputContainerProps {
  widthCustom: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${(props) => props.widthCustom};
  background: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  border-radius: 4px;
  position: relative;
  justify-content: end;
 

  input {
    font-size: 14px;
    color: ${props => props.theme["base-text"]};
    flex-grow: 1;
    width: inherit;
    background: none;
    border: none;
    padding: 0.75rem;
    border-radius: inherit;

    &::placeholder {
        color: ${props => props.theme["base-label"]};
    }
  }

  span {
    font-size: 12px;
    color: ${props => props.theme["base-label"]};;
    position: absolute;
    right: 12px;
    font-style: italic;
  }
`;

export const Error = styled.span`
  margin-bottom: 0px;
  color: ${props => props.theme.error};
  font-size: 12px;
  font-style: italic;
`