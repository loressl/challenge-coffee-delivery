import { AddressContainer, FormContainer } from "./styles";
import { MapPinLine } from 'phosphor-react'
import { Input } from "../../../../components/Input";
import { Frame } from "../Frame";
import { cepMask } from '../../../../util/mask'
import { FormEvent } from "react";
import { useFormContext } from "react-hook-form";

export function Address() {
    const { register, setValue } = useFormContext()

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        if (target.name === 'cep'){
            const mask = cepMask(target.value)
            setValue(target.name, mask)
        }
        console.log(target.name)
    }

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
                    <Input
                        {...register('cep')}
                        placeholder="CEP"
                        widthCustom="12.5rem"
                        maxLength={8}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <Input
                        placeholder="Rua"
                        widthCustom="100%"
                    />
                    <div className="complement">
                        <Input
                            placeholder="Número"
                            widthCustom="12.5rem"
                        />
                        <Input
                            widthCustom="100%"
                            placeholder="Complemento"
                            optional="Opcional"
                        />
                    </div>
                    <div className="complement">
                        <Input
                            placeholder="Bairro"
                            widthCustom="12.5rem"
                        />
                        <Input
                            placeholder="Cidade"
                            widthCustom="100%"
                        />
                        <Input
                            placeholder="UF"
                            widthCustom="3.75rem"
                        />
                    </div>
                </FormContainer>
            </div>
        </AddressContainer>
    )
}