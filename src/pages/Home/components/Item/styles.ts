import styled from "styled-components";

export const COLOR_BACKGROUND ={
    yellowDark: "yellow-dark",
    yellow: "yellow",
    base: "base-text",
    purple: "purple"
} as const


interface ItemContainerProps {
    colorBackgroundIcon: keyof typeof COLOR_BACKGROUND
}

export const ItemContainer = styled.div<ItemContainerProps>`
  display: flex;
  height: 2rem;
  align-items: center;
  gap: 0.75rem;
  flex-direction: row;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme[COLOR_BACKGROUND[props.colorBackgroundIcon]]};
    border-radius: 1000px;
    gap: 0.75rem;

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  & .text {
    font-size: 1rem;
    color: ${props => props.theme["base-text"]};
    line-height: 1.3;
  }
`;
