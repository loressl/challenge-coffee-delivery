import { Minus, Plus } from "phosphor-react";
import { ButtonSelectContainer, CardCoffeeContainer, Price } from "./styles";
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
                    <ButtonSelectContainer>
                        <button>
                            <Minus size={14}/>
                        </button>
                        <span>1</span>
                        <button>
                            <Plus size={14}/>
                        </button>
                    </ButtonSelectContainer>
                </div>
            </Price>
        </CardCoffeeContainer>
    )
}