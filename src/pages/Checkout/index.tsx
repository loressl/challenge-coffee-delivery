import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Address } from "./components/Address";
import { ConfirmOrdered } from "./components/ConfirmOrdered";
import { Payment } from "./components/Payment";
import { CheckoutContainer, OrderedContainer } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useCoffee } from '../../hooks/useCoffee';
import { useEffect } from 'react';

enum PaymentType {
    credit = 'credit',
    debit = 'debit',
    money = 'money'
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
    const {coffees,cleanOrder} = useCoffee()

    useEffect(() => {
        if(!coffees.length) {
            navigate('/')
        }
    }, [])

    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
    })

    const { handleSubmit } = confirmOrderForm

    const handleConfirmeOrdered=(data: ConfirmOrderFormData) =>{
        navigate('/success' , {
            state: data
        })
        cleanOrder()
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