import { HeaderContainer } from "./styles";
import logoCoffee from '../../assets/coffee-delivery-logo.svg'
import { MapPin } from "phosphor-react";
import { ButtonCart } from "../ButtonCart";
import { useNavigate, Link } from 'react-router-dom'


export function Header() {
    let navigate = useNavigate()

    function handleCheckout() {
        navigate('/checkout')
    }

    return (
        <HeaderContainer>
            <Link to='/'>
                <img src={logoCoffee} alt="" />
            </Link>
            <div>
                <div className="location">
                    <MapPin size={24} weight="fill" />
                    Salvador, BA
                </div>
                <ButtonCart 
                    buttonColor="header" 
                    iconColorButton="header" 
                    total={3}
                    onClickButton={handleCheckout}
                />
            </div>
        </HeaderContainer>
    )
}