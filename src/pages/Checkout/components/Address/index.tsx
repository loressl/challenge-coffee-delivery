import { AddressContainer, FormContainer, Input, InputContainer, InputWrapper } from "./styles";
import { MapPinLine } from 'phosphor-react'
import { Frame } from "../Frame";
import { useFormContext } from "react-hook-form";
import { ErrorComponent } from "../../../../components";

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
                    <InputWrapper widthCustom="12.5rem">
                        <InputContainer widthCustom="12.5rem">
                            <Input {...register('cep')} placeholder="CEP" maxLength={8} />
                        </InputContainer>
                        {errors.cep && <ErrorComponent text={errors.cep.message?.toString() || ''} />}
                    </InputWrapper>

                    <InputWrapper widthCustom="100%">
                        <InputContainer widthCustom="100%">
                            <Input {...register('street')} placeholder="Rua" />
                        </InputContainer>
                        {errors.street && <ErrorComponent text={errors.street?.message?.toString() || ''}/>}
                    </InputWrapper>

                    <div className="complement">
                        <InputWrapper widthCustom="12.5rem">
                            <InputContainer widthCustom="12.5rem">
                                <Input
                                    type="number"
                                    placeholder="Número"
                                    {...register('number', { setValueAs: (v) => v ? parseInt(v): undefined})}
                                />
                            </InputContainer>
                            {errors.number && <ErrorComponent text={errors.number?.message?.toString() || ''}/>}
                        </InputWrapper>
                        
                        <InputWrapper widthCustom="100%">
                            <InputContainer widthCustom="100%">
                                <Input {...register('complement')} placeholder="Complemento" />
                                <span>Opcional</span>
                            </InputContainer>
                        </InputWrapper>
                    </div>

                    <div className="complement">
                        <InputWrapper widthCustom="12.5rem">
                            <InputContainer widthCustom="12.5rem">
                                <Input {...register('district')} placeholder="Bairro" />
                            </InputContainer>
                            {errors.district && <ErrorComponent text={errors.district?.message?.toString() || ''}/>}
                        </InputWrapper>

                        <InputWrapper widthCustom="17.25rem">
                            <InputContainer widthCustom="17.25rem">
                                <Input {...register('city')} placeholder="Cidade" />
                            </InputContainer>
                            {errors.city && <ErrorComponent text={errors.city?.message?.toString() || ''}/>}
                        </InputWrapper>

                        <InputWrapper widthCustom="3.75rem">
                            <InputContainer widthCustom="3.75rem">
                                <Input {...register('state')} placeholder="UF" maxLength={2} />
                            </InputContainer>
                            {errors.state && <ErrorComponent text={errors.state?.message?.toString() || ''}/>}
                        </InputWrapper>
                    </div>
                </FormContainer>
            </div>
        </AddressContainer>
    )
}