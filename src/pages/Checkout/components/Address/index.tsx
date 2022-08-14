import { AddressContainer, FormContainer, OrderedContainer, SelectedCoffesContainer } from "./styles";
import { MapPinLine } from 'phosphor-react'
import { Input } from "../../../../components/Input";

export function Address() {
    return (
        <AddressContainer>
            <OrderedContainer>
                <p>Complete seu pedido</p>
                <div className="box-address">
                    <div className="address-title">
                        <MapPinLine size={22} />
                        <div className="phrase">
                            <span>Endereço de Entrega</span>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </div>
                    </div>
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
                <div className="payment">

                </div>
            </OrderedContainer>

            <SelectedCoffesContainer>
                <p>Complete seu pedido</p>
                <div className="box-coffes-selected">

                </div>
            </SelectedCoffesContainer>
        </AddressContainer>
    )
}