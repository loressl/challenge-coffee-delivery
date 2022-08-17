import styled from "styled-components";

export const COLOR_ICON ={
  yellowDark: "yellow-dark",
  purple: "purple"
} as const

interface FrameContainerProps {
  colorIcon: keyof typeof COLOR_ICON
}

export const FrameContainer = styled.div<FrameContainerProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 35rem;
  height: 2.75rem;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[COLOR_ICON[props.colorIcon]]};
  }

  & .phrase {
    display: flex;
    flex-direction: column;

    span:first-of-type {
      color: ${(props) => props.theme["base-subtitle"]};
      line-height: 1.3;
      align-self: stretch;
      margin-bottom: 2px;
    }

    span:nth-child(2) {
      color: ${(props) => props.theme["base-text"]};
      font-size: 14px;
      line-height: 1.3;
      align-self: stretch;
    }
  }
`;
