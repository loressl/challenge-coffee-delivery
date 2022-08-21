import { AddressContainer, FormContainer } from "./styles";
import { MapPinLine } from 'phosphor-react'
import { Input } from "../../../../components/Input";
import { Frame } from "../Frame";

export function Address() {

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
                        placeholder="CEP"
                        widthCustom="12.5rem"
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