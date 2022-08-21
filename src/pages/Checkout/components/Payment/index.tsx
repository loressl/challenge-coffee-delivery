import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { ReactElement } from "react";
import { Frame } from "../Frame";
import { ButtonPaymentContainer, PaymentContainer } from "./styles";

interface TypeButtonPayment {
    type: string
    name: string
    icon: ReactElement
}

const typesButtonPayment = [
    {
        type: 'credito',
        name: 'cartão de crédito',
        icon: <CreditCard size={16} />
    },
    {
        type: 'debito',
        name: 'cartão de débito',
        icon: <Bank size={16} />
    },
    {
        type: 'dinheiro',
        name: 'dinheiro',
        icon: <Money size={16} />
    },
] as TypeButtonPayment[]

export function Payment() {
    return (
        <PaymentContainer>
            <Frame
                icon={<CurrencyDollar size={22} />}
                title="Pagamento"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                colorIcon="purple"
            />
            <div className="paymentMethods">
                {typesButtonPayment.map((type) => (
                    <ButtonPaymentContainer key={type.type}>
                        {type.icon}
                        {type.name}
                    </ButtonPaymentContainer>
                ))}
            </div>
        </PaymentContainer>
    )
}