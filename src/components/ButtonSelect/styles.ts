import styled from "styled-components";

interface ButtonSelectProps {
  widthButton: string
  heightButton: string
}

export const ButtonSelectContainer = styled.div<ButtonSelectProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  gap: 4px;
  width: ${props => props.widthButton};
  height: ${props => props.heightButton};
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  span {
    text-align: center;
    color: ${(props) => props.theme["base-title"]};
  }

  button {
    color: ${(props) => props.theme["purple-dark"]};
    display: flex;
    height: 100%;
    align-items: center;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    &:hover {
      filter: brightness(0.95);
    }
  }
`;