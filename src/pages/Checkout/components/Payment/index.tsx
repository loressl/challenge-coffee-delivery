import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { Frame } from "../Frame";
import { ButtonPaymentContainer, PaymentContainer, Error } from "./styles";

interface TypeButtonPayment {
    type: string
    name: string
    icon: ReactElement
}

export const typesButtonPayment = [
    {
        type: 'credit',
        name: 'Cartão de Crédito',
        icon: <CreditCard size={16} />
    },
    {
        type: 'debit',
        name: 'Cartão de Cébito',
        icon: <Bank size={16} />
    },
    {
        type: 'money',
        name: 'Dinheiro',
        icon: <Money size={16} />
    },
] as TypeButtonPayment[]

export function Payment() {
    const { register, formState: { errors } } = useFormContext()

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
                        <input 
                            {...register('paymentType')} 
                            id={type.type} 
                            name="paymentType" 
                            type="radio" 
                            value={type.type}
                        />
                        <label htmlFor={type.type}>
                            {type.icon}
                            {type.name}
                        </label>
                    </ButtonPaymentContainer>
                ))}
            </div>
            {errors.paymentType && <Error>{errors.paymentType?.message?.toString()}</Error>}
        </PaymentContainer>
    )
}