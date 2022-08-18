import { Trash } from "phosphor-react";
import { ButtonSelect } from "../../../../components/ButtonSelect";
import { ButtonRemove, CoffeeSelectedContainer } from "./styles";
import testeExpress from '/coffee/expresso.svg'

export function CoffeeSelected(){
    return(
        <CoffeeSelectedContainer>
            <div className="coffe-data">
                <img src={testeExpress} alt="teste"/>
                <div className="choose-more-coffee">
                    <span className="subtitle">Expresso Tradicional</span>
                    <div className="more-remove">
                        <ButtonSelect widthButton="4.5rem" heightButton="2rem"/>
                        <ButtonRemove>
                            <Trash size={16}/>
                            Remover
                        </ButtonRemove>
                    </div>
                </div>
                <span className="value">R$ 9,90</span>
            </div>
        </CoffeeSelectedContainer>
    )
}