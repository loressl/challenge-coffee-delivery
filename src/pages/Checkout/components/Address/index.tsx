import { AddressContainer, OrderedContainer, SelectedCoffesContainer } from "./styles";
import {MapPinLine} from 'phosphor-react'

export function Address() {
    return(
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
                    <form>
                        
                    </form>
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