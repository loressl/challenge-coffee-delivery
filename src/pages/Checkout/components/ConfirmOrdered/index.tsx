import { useNavigate } from "react-router-dom";
import { useCoffee } from "../../../../hooks/useCoffee";
import { formatPrice } from "../../../../util/format";
import { CoffeeSelected } from "../CoffeeSelected";
import { ButtonConfirm, ConfirmOrderedContainer } from "./styles";

export function ConfirmOrdered() {
    const { coffees, deliveryFee } = useCoffee()

    const coffeesFormatted = coffees.map((coffee) => ({
        ...coffee,
        subTotal: formatPrice(coffee.amount * coffee.price)
    }))

    const totalItens =
        coffees.reduce((sumTotal, coffee) => {
            const quantity = coffee.price * coffee.amount
            sumTotal = sumTotal + quantity
            return sumTotal
        }, 0)

    let navigate = useNavigate()

    function handleConfirm() {
        navigate('/success')
    }

    return (
        <ConfirmOrderedContainer>
            <p>Cafés selecionados</p>
            <div className="box-coffes-selected">
                {coffeesFormatted?.map((coffee) =>
                        <CoffeeSelected
                            coffee={coffee}
                            key={coffee.id}
                            subTotal={coffee.subTotal}
                        />
                    )
                }
                <div className="prices">
                    <div className="itens">
                        <p className="title-price">Total de itens</p>
                        <span>{formatPrice(totalItens)}</span>
                    </div>
                    <div className="itens">
                        <p className="title-price">Entrega</p>
                        <span>{coffeesFormatted.length ? formatPrice(deliveryFee): formatPrice(0.0)}</span>
                    </div>
                    <div className="total">
                        <p className="title-total">Total</p>
                        <span>{formatPrice( coffeesFormatted.length ? totalItens+deliveryFee: 0.0)}</span>
                    </div>
                </div>
                <ButtonConfirm onClick={handleConfirm}>
                    Confirmar pedido
                </ButtonConfirm>
            </div>
        </ConfirmOrderedContainer>
    )
}