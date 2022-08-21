import { Address } from "./components/Address";
import { ConfirmOrdered } from "./components/ConfirmOrdered";
import { Payment } from "./components/Payment";
import { CheckoutContainer, OrderedContainer } from "./styles";

export function Checkout() {

    return(
        <CheckoutContainer>
            <OrderedContainer>
                <Address/>
                <Payment />
            </OrderedContainer>
            <ConfirmOrdered/>
        </CheckoutContainer>
    )
}