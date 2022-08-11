import { ShoppingCart } from "phosphor-react";
import { ButtonCartColor, ButtonCartContainer, ButtonCartHover, IconColorButton } from "./styles";

interface ButtonCartProps {
    total: number
    buttonColor: ButtonCartColor
    iconColorButton: IconColorButton
    buttonHover?: ButtonCartHover
}

export function ButtonCart({total, buttonColor, iconColorButton, buttonHover}: ButtonCartProps){
    return(
        <ButtonCartContainer 
            buttonColor={buttonColor} 
            iconColorButton={iconColorButton} 
            isExistNumber={total > 0}
        >
            <ShoppingCart size={22} weight="fill"/>
            {total > 0 && <p>{total}</p>}
        </ButtonCartContainer>
    )
}