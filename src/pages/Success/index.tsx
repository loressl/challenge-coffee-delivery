import { InfoLocal, OrderInfo, SuccessContainer } from "./styles";
import illustration from '../../assets/illustration.svg'
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { ItemWithIcon } from "../../components/ItemWithIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { ConfirmOrderFormData } from "../Checkout";
import { useEffect, useMemo } from "react";
import { typesButtonPayment } from "../Checkout/components/Payment";

interface StateLocation {
    state: ConfirmOrderFormData
}

export function Success() {
    const { state } = useLocation() as unknown as StateLocation
    const paymentType = useMemo(() => typesButtonPayment.find((item) => item.type === state.paymentType), [state])
    const navigate = useNavigate()

    useEffect(() => {
        if(!state){
            navigate('/')
        }
    }, [])

    if(!state) return <></>

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
                                <span>Entrega em <strong>{`${state.street}, ${state.number}`}</strong></span>
                                <span>{`${state.district} - ${state.city}, ${state.state}`}</span>
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
                                <span><strong>{paymentType?.name}</strong></span>
                            </InfoLocal>
                        }
                    />
                </OrderInfo>
            </div>
            <img src={illustration} alt="Ilustração" />
        </SuccessContainer>
    )
}