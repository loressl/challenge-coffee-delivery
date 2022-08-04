import { HeaderContainer } from "./styles";
import logoCoffee from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
    return(
        <HeaderContainer>
            <img src={logoCoffee} alt=""/>
            <nav>
                <NavLink to="/" title="Home">
                    <MapPin size={24}/>
                    Salvador
                </NavLink>
                <NavLink to="/checkout" title="Checkout">
                    <ShoppingCart size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}