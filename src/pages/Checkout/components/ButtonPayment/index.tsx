import { ReactElement } from "react";
import { ButtonPaymentContainer } from "./styles";

interface ButtonPaymentProps{
    name: string
    icon: ReactElement
}

export function ButtonPayment({name, icon}: ButtonPaymentProps) {
    return(
        <ButtonPaymentContainer>
            {icon}
            {name}
        </ButtonPaymentContainer>
    )
}