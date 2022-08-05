import styled, {css} from "styled-components";

export type ButtonVariant = 'cartHeader' | 'cartCard' | 'remove' | 'creditCard' | 'checkoutConfirm'
export type ButtonHover = 'cartHeader' | 'cartCard' | 'remove' | 'creditCard' | 'checkoutConfirm'

interface ButtonContainerProps {
    variant: ButtonVariant
    buttonHover?: ButtonHover
    borderColer?: string
    padding?: number
}


export const ButtonContainer = styled.button`
    display: flex;
    padding: 0.5rem;
    border-radius: 6px;
`