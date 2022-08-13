import { AddressContainer, FormContainer, InputField, OrderedContainer, SelectedCoffesContainer } from "./styles";
import { MapPinLine } from 'phosphor-react'

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
                        <InputField
                            placeholder="CEP"
                            widthInput="12.5rem"
                        />
                        <InputField
                            placeholder="Rua"
                            widthInput="100%"
                        />
                        <div className="complement">
                            <InputField
                                placeholder="Número"
                                widthInput="12.5rem"
                            />
                            <InputField
                                placeholder="Complemento"
                                widthInput="100%"
                            />
                        </div>
                        <div className="complement">
                            <InputField
                                placeholder="Bairro"
                                widthInput="12.5rem"
                            />
                            <InputField
                                placeholder="Cidade"
                                widthInput="100%"
                            />
                            <InputField
                                placeholder="UF"
                                widthInput="3.75rem"
                            />
                        </div>
                    </FormContainer>
                </div>
                <div className="payment">

                </div>
            </OrderedContainer>

            <SelectedCoffesContainer>
                selected
            </SelectedCoffesContainer>
        </AddressContainer>
    )
}