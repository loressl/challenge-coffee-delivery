import { HeaderContainer } from "./styles";
import logoCoffee from '../../assets/coffee-delivery-logo.svg'
import { MapPin } from "phosphor-react";
import { ButtonCart } from "../ButtonCart";
import { useNavigate, Link } from 'react-router-dom'
import { useCoffee } from "../../hooks/useCoffee";


export function Header() {
    const { coffees } = useCoffee()
    const coffeeSize = coffees.length

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
                    total={coffeeSize}
                    onClickButton={handleCheckout}
                />
            </div>
        </HeaderContainer>
    )
}