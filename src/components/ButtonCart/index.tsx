import { ShoppingCart } from "phosphor-react";
import { ButtonCartColor, ButtonCartContainer, ButtonCartHover, IconColorButton } from "./styles";

interface ButtonCartProps {
    total: number
    buttonColor: ButtonCartColor
    iconColorButton: IconColorButton
    buttonHover?: ButtonCartHover
    onClickButton: () => void
}

export function ButtonCart({total, buttonColor, iconColorButton, buttonHover, onClickButton}: ButtonCartProps){
    return(
        <ButtonCartContainer 
            buttonColor={buttonColor} 
            iconColorButton={iconColorButton} 
            isExistNumber={total > 0}
            buttonHover={buttonHover}
            onClick={onClickButton}
        >
            <ShoppingCart size={22} weight="fill"/>
            {total > 0 && <p>{total}</p>}
        </ButtonCartContainer>
    )
}