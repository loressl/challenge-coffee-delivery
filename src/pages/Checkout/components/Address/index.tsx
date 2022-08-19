import { AddressContainer, ButtonConfirm, Divider, FormContainer, OrderedContainer, SelectedCoffesContainer } from "./styles";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import { Input } from "../../../../components/Input";
import { Frame } from "../Frame";
import { ButtonPayment } from "../ButtonPayment";
import { ReactElement } from "react";
import { CoffeeSelected } from "../CoffeeSelected";
import { useNavigate } from "react-router-dom";

interface TypeButtonPayment {
    type: string
    name: string
    icon: ReactElement
}

const typesButtonPayment = [
    {
        type: 'credito',
        name: 'cartão de crédito',
        icon: <CreditCard size={16} />
    },
    {
        type: 'debito',
        name: 'cartão de débito',
        icon: <Bank size={16} />
    },
    {
        type: 'dinheiro',
        name: 'dinheiro',
        icon: <Money size={16} />
    },
] as TypeButtonPayment[]

export function Address() {
    let navigate = useNavigate()

    function handleConfirm() {
        navigate('/success')
    }

    return (
        <AddressContainer>
            <OrderedContainer>
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
                <div className="payment">
                    <Frame
                        icon={<CurrencyDollar size={22} />}
                        title="Pagamento"
                        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                        colorIcon="purple"
                    />
                    <div className="paymentMethods">
                        {typesButtonPayment.map((type) => (
                            <ButtonPayment
                                key={type.type}
                                name={type.name}
                                icon={type.icon}
                            />
                        ))}
                    </div>
                </div>
            </OrderedContainer>

            <SelectedCoffesContainer>
                <p>Complete seu pedido</p>
                <div className="box-coffes-selected">
                    <CoffeeSelected />
                    <Divider />
                    <CoffeeSelected />
                    <Divider />
                    <div className="prices">
                        <div className="itens">
                            <p className="title-price">Total de itens</p>
                            <span>R$ 29,70</span>
                        </div>
                        <div className="itens">
                            <p className="title-price">Entrega</p>
                            <span>R$ 3,50</span>
                        </div>
                        <div className="total">
                            <p className="title-total">Total</p>
                            <span>R$ 33,20</span>
                        </div>
                    </div>
                    <ButtonConfirm onClick={handleConfirm}>
                        Confirmar pedido
                    </ButtonConfirm>
                </div>
            </SelectedCoffesContainer>
        </AddressContainer>
    )
}