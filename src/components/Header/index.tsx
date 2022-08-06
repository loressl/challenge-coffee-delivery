import { HeaderContainer } from "./styles";
import logoCoffee from '../../assets/coffee-delivery-logo.svg'
import { MapPin } from "phosphor-react";
import { ButtonCart } from "./components/ButtonCart";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffee} alt="" />
            <div>
                <div className="location">
                    <MapPin size={24} weight="fill" />
                    Salvador, BA
                </div>
                <ButtonCart/>
            </div>
        </HeaderContainer>
    )
}