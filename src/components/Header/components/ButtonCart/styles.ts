import styled from "styled-components";

export const ButtonContainerCart = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["yellow-light"]};
  cursor: pointer;
  position: relative;

  &:hover {
    filter: brightness(0.95);
  }

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    background: ${props => props.theme["yellow-dark"]};
    border-radius: 1000px;
    z-index: 1;
    font-size: 12px;
    line-height: 1.3;
    font-weight: 700;
    color: ${props => props.theme.white};
    position: absolute;
    right: -8.35px;
    top: -8px;
  }
`;
