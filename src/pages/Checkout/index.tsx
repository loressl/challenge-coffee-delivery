import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Address } from "./components/Address";
import { ConfirmOrdered } from "./components/ConfirmOrdered";
import { Payment } from "./components/Payment";
import { CheckoutContainer, OrderedContainer } from "./styles";
import { useNavigate } from 'react-router-dom';

enum PaymentType {
    credit = 'credito',
    debit = 'debito',
    money = 'dinheiro'
}

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(1, 'Informe o CEP'),
    street: zod.string().min(1, 'Informe a rua'),
    number: zod.number().min(1, 'Informe o número da casa'),
    complement: zod.string(),
    district: zod.string().min(1, 'Informe o bairro'),
    city: zod.string().min(1, 'Informe sua cidade'),
    state: zod.string().min(1, 'Informe a sigla do seu estado'),
    paymentType: zod.nativeEnum(PaymentType, {
        errorMap: () => {
            return { message: "Informe o tipo de pagamento" }
        }
    })
})

export type ConfirmOrderFormData = zod.infer<typeof confirmOrderFormValidationSchema>

export function Checkout() {
    let navigate = useNavigate()

    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
    })

    const { handleSubmit } = confirmOrderForm

    const handleConfirmeOrdered=(data: ConfirmOrderFormData) =>{
        console.log(data)
        //navigate('/success')
        console.log('clicou')
    }
 
    return (
        <CheckoutContainer onSubmit={handleSubmit(handleConfirmeOrdered)} action="">
            <OrderedContainer>
                <FormProvider {...confirmOrderForm}>
                    <Address />
                    <Payment />
                </FormProvider>
            </OrderedContainer>
            <ConfirmOrdered />
        </CheckoutContainer>
    )
}