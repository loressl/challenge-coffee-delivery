import { Trash } from "phosphor-react";
import { ButtonSelect } from "../../../../components/ButtonSelect";
import { useCoffee } from "../../../../hooks/useCoffee";
import { Coffee } from "../../../../types";
import { ButtonRemove, CoffeeSelectedContainer, Divider } from "./styles";

interface CoffeeSelectedProps {
    coffee: Coffee
    subTotal: string
}

export function CoffeeSelected({coffee, subTotal }: CoffeeSelectedProps) {

    const { updateCoffeeAmount, removeCoffee } = useCoffee()

    const handleOnDecrement = (id: number, amount: number) => {
        updateCoffeeAmount({ coffeeId: id, amount })
    }

    const handleOnIncrement = (id: number, amount: number) => {
        updateCoffeeAmount({ coffeeId: id, amount })
    }

    const handleRemoveCoffee = (coffeeId: number) => {
        removeCoffee(coffeeId)
    }

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
                                disabledButton={coffee.amount === 1}
                                onDecrement={() => handleOnDecrement(coffee.id, coffee.amount - 1)}
                                onIncrement={() => handleOnIncrement(coffee.id, coffee.amount + 1)}
                            />
                            <ButtonRemove onClick={() => handleRemoveCoffee(coffee.id)}>
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