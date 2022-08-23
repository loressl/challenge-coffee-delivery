import { useNavigate } from "react-router-dom";
import { ButtonCart } from "../../../../components/ButtonCart";
import { ButtonSelect } from "../../../../components/ButtonSelect";
import { useCoffee } from "../../../../hooks/useCoffee";
import { Coffee } from "../../../../types";
import { formatPrice } from "../../../../util/format";
import { CardCoffeeContainer, Price } from "./styles";

export interface CardCoffeeProps {
    coffee: Coffee
}

export function CardCoffee({ coffee }: CardCoffeeProps){
    const { coffees, addCoffee, updateCoffeeAmount} = useCoffee()
    let navigate = useNavigate()

    function handleCheckout() {
        navigate('/checkout')
    }

    const handleUpdateProduct = (id: number, increment: boolean, decrement: boolean) => {
        const verifyCoffeeCart = coffees.find((item) => item.id === id)
        if(!verifyCoffeeCart){
            addCoffee(id)
        } else {
            increment && updateCoffeeAmount({coffeeId: id, amount: verifyCoffeeCart.amount + 1})
            decrement && updateCoffeeAmount({coffeeId: id, amount: verifyCoffeeCart.amount - 1})
        }
    }

    return(
        <CardCoffeeContainer>
            <img src={coffee.urlImage}  alt={coffee.title}/>
            <div className="tag-container">
                {coffee.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
            </div>
            <p className="name-coffee">{coffee.title}</p>
            <p className="description">{coffee.description}</p>
            <Price>
                <p className="value">{formatPrice(coffee.price).slice(0,2)}<strong>{formatPrice(coffee.price).slice(2)}</strong></p>
                <div className="actions">
                    <ButtonSelect 
                        widthButton="4.5rem" 
                        heightButton="2.375rem"
                        total={coffee.amount || 0}
                        onDecrement={() => handleUpdateProduct(coffee.id, false, true)}
                        onIncrement={() => handleUpdateProduct(coffee.id, true, false)}
                    />
                    <ButtonCart 
                        buttonColor="cart"
                        iconColorButton="cart"
                        total={0}
                        buttonHover="cart"
                        onClickButton={handleCheckout}
                    />
                </div>
            </Price>
        </CardCoffeeContainer>
    )
}