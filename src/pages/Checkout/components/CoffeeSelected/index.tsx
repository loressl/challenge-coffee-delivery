import { Trash } from "phosphor-react";
import { ButtonSelect } from "../../../../components/ButtonSelect";
import { Coffee } from "../../../../types";
import { ButtonRemove, CoffeeSelectedContainer, Divider } from "./styles";

interface CoffeeSelectedProps {
    coffee: Coffee
    onIncrement: () => void
    onDecrement: () => void
    subTotal: string
}

export function CoffeeSelected({coffee, onDecrement, onIncrement, subTotal }: CoffeeSelectedProps) {

    return (
        <>
            <CoffeeSelectedContainer>
                <div className="coffe-data">
                    <img src={coffee.urlImage} alt="teste" />
                    <div className="choose-more-coffee">
                        <span className="subtitle">{coffee.title}</span>
                        <div className="more-remove">
                            <ButtonSelect
                                widthButton="4.5rem"
                                heightButton="2rem"
                                total={coffee.amount}
                                onDecrement={onDecrement}
                                onIncrement={onIncrement}
                            />
                            <ButtonRemove>
                                <Trash size={16} />
                                Remover
                            </ButtonRemove>
                        </div>
                    </div>
                    <span className="value">{subTotal}</span>
                </div>
            </CoffeeSelectedContainer>
            <Divider />
        </>
    )
}