import styled, { css } from "styled-components";

export type IconColorButton = "cart" | "header"
export type ButtonCartColor = "header" | "cart";
export type ButtonCartHover = "purple";

interface ButtonCartContainerProps {
  buttonColor: ButtonCartColor;
  buttonHover?: ButtonCartHover;
  iconColorButton: IconColorButton
  isExistNumber?: boolean
}

const buttonColor = {
    header: '#F1E9C9',
    cart: '#4B2995'
}

const iconColor ={
    header: '#C47F17',
    cart: '#FFFFFF'
}

export const ButtonCartContainer = styled.button<ButtonCartContainerProps>`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  ${(props) => css`
    background-color: ${buttonColor[props.buttonColor]};
  `}
  cursor: pointer;
  position: relative;

  &:hover {
    filter: brightness(0.95);
  }

  ${(props) => css`
    svg {
        color: ${iconColor[props.iconColorButton]};
    }
  `}

  ${(props) => props.isExistNumber && css`
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.25rem;
        height: 1.25rem;
        background: ${(props) => props.theme["yellow-dark"]};
        border-radius: 1000px;
        z-index: 1;
        font-size: 12px;
        line-height: 1.3;
        font-weight: 700;
        color: ${(props) => props.theme.white};
        position: absolute;
        right: -8.35px;
        top: -8px;
    }
  `}
`;
