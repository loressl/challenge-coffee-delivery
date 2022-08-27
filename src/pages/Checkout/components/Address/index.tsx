import { AddressContainer, FormContainer, Input, InputContainer, Error } from "./styles";
import { MapPinLine } from 'phosphor-react'
import { Frame } from "../Frame";
import { useFormContext } from "react-hook-form";

export function Address() {
    const { register, formState: { errors } } = useFormContext()

    return (
        <AddressContainer>
            <p>Complete seu pedido</p>
            <div className="box-address">
                <Frame
                    icon={<MapPinLine size={22} />}
                    title="Endereço de Entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                    colorIcon="yellowDark"
                />
                <FormContainer>
                    <InputContainer widthCustom="12.5rem">
                        <Input {...register('cep')} placeholder="CEP" maxLength={8} />
                    </InputContainer>
                    {errors.cep && <Error>{errors.cep?.message?.toString()}</Error>}
                    <InputContainer widthCustom="100%">
                        <Input {...register('street')} placeholder="Rua" />
                    </InputContainer>
                    {errors.street && <Error>{errors.street?.message?.toString()}</Error>}
                    <div className="complement">
                        <div className="complement-input">
                            <InputContainer widthCustom="12.5rem">
                                <Input
                                    {...register('number', { valueAsNumber: true })}
                                    type="number"
                                    placeholder="Número"
                                />
                            </InputContainer>
                            {errors.number && <Error>{errors.number?.message?.toString()}</Error>}
                        </div>
                        <InputContainer widthCustom="100%">
                            <Input {...register('complement')} placeholder="Complemento" />
                            <span>Opcional</span>
                        </InputContainer>
                    </div>
                    <div className="complement">
                        <div className="complement-input">
                            <InputContainer widthCustom="12.5rem">
                                <Input {...register('district')} placeholder="Bairro" />
                            </InputContainer>
                            {errors.district && <Error>{errors.district?.message?.toString()}</Error>}
                        </div>
                        <div className="complement-input">
                            <InputContainer widthCustom="17.25rem">
                                <Input {...register('city')} placeholder="Cidade" />
                            </InputContainer>
                            {errors.city && <Error>{errors.city?.message?.toString()}</Error>}
                        </div>
                        <div className="complement-input">
                            <InputContainer widthCustom="3.75rem">
                                <Input {...register('state')} placeholder="UF" maxLength={2} />
                            </InputContainer>
                            {errors.state && <Error>{errors.state?.message?.toString()}</Error>}
                        </div>
                    </div>
                </FormContainer>
            </div>
        </AddressContainer>
    )
}