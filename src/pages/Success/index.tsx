import { InfoLocal, OrderInfo, SuccessContainer } from "./styles";
import illustration from '../../assets/illustration.svg'
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { ItemWithIcon } from "../../components/ItemWithIcon";

export function Success() {
    return (
        <SuccessContainer>
            <div className="confirm-ordered">
                <p>Uhu! Pedido confirmado</p>
                <span>Agora é só aguardar que logo o café chegará até você</span>
                <OrderInfo>
                    <ItemWithIcon
                        icon={<MapPin weight="fill" />}
                        backgroundIconColor="purple"
                        text={
                            <InfoLocal>
                                <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
                                <span>Farrapos - Porto Alegre, RS</span>
                            </InfoLocal>
                        }
                    />
                    <ItemWithIcon
                        icon={<Clock weight="fill" />}
                        backgroundIconColor="yellow"
                        text={
                            <InfoLocal>
                                <span>Previsão de entrega</span>
                                <span><strong>20 min - 30 min</strong></span>
                            </InfoLocal>
                        }
                    />
                    <ItemWithIcon
                        icon={<CurrencyDollar weight="fill" />}
                        backgroundIconColor="yellowDark"
                        text={
                            <InfoLocal>
                                <span>Pagamento na entrega</span>
                                <span><strong>Cartão de Crédito</strong></span>
                            </InfoLocal>
                        }
                    />
                </OrderInfo>
            </div>
            <img src={illustration} alt="Ilustração" />
        </SuccessContainer>
    )
}