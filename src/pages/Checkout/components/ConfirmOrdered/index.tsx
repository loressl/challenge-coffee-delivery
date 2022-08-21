import { useNavigate } from "react-router-dom";
import { CoffeeSelected } from "../CoffeeSelected";
import { ButtonConfirm, ConfirmOrderedContainer, Divider } from "./styles";

export function ConfirmOrdered() {

    let navigate = useNavigate()

    function handleConfirm() {
        navigate('/success')
    }

    return (
        <ConfirmOrderedContainer>
            <p>Cafés selecionados</p>
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
        </ConfirmOrderedContainer>
    )
}