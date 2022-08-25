import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Address } from "./components/Address";
import { ConfirmOrdered } from "./components/ConfirmOrdered";
import { Payment } from "./components/Payment";
import { CheckoutContainer, OrderedContainer } from "./styles";

const addressFormValidationSchema = zod.object({
    cep: zod.string().min(1, 'Informe o CEP'),
    street: zod.string().min(1, 'Informe a rua')
})

type AddressFormData = zod.infer<typeof addressFormValidationSchema>

export function Checkout() {

    const addressForm = useForm<AddressFormData>({
        resolver: zodResolver(addressFormValidationSchema),
        defaultValues:{
            cep: '',
            street: ''
        }
    })

    return(
        <CheckoutContainer action="">
            <FormProvider {...addressForm}>
                <OrderedContainer>
                    <Address/>
                    <Payment />
                </OrderedContainer>
                <ConfirmOrdered/>
            </FormProvider>
        </CheckoutContainer>
    )
}