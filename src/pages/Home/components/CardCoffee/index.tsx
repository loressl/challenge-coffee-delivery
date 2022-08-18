import { ButtonCart } from "../../../../components/ButtonCart";
import { ButtonSelect } from "../../../../components/ButtonSelect";
import { CardCoffeeContainer, Price } from "./styles";
import coffeeTeste from '/coffee/arabe.svg'

export function CardCoffee(){
    return(
        <CardCoffeeContainer>
            <img src={coffeeTeste}  alt=""/>
            <span className="tag">tradicional</span>
            <p className="name-coffee">Expresso Tradicional</p>
            <p className="description">O tradicional café feito com água quente e grãos moídos</p>
            <Price>
                <p className="value">R$<strong> 9,90</strong></p>
                <div className="actions">
                    <ButtonSelect widthButton="4.5rem" heightButton="2.375rem"/>
                    <ButtonCart 
                        buttonColor="cart"
                        iconColorButton="cart"
                        total={0}
                        buttonHover="cart"
                        onClickButton={() => console.log('cart')}
                    />
                </div>
            </Price>
        </CardCoffeeContainer>
    )
}