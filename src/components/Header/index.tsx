import { HeaderContainer } from "./styles";
import logoCoffee from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Button } from "../Button";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffee} alt="" />
            <div>
                <div className="location">
                    <MapPin size={24} weight="fill" />
                    Salvador, BA
                </div>
                <Button>
                    <ShoppingCart size={24} />
                </Button>
            </div>
        </HeaderContainer>
    )
}