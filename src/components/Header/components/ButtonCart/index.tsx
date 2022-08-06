import { ShoppingCart } from "phosphor-react";
import { ButtonContainerCart } from "./styles";

export function ButtonCart(){
    return(
        <ButtonContainerCart>
            <ShoppingCart size={22} weight="fill"/>
            <p>3</p>
        </ButtonContainerCart>
    )
}