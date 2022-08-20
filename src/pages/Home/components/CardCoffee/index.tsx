import { ButtonCart } from "../../../../components/ButtonCart";
import { ButtonSelect } from "../../../../components/ButtonSelect";
import { CardCoffeeContainer, Price } from "./styles";

export interface Coffee{
    id: number
    description: string
    tags: String[]
    title: string
    urlImage: string
    price: number
}

export interface CardCoffeeProps {
    coffee: Coffee
    total: 0
}

export function CardCoffee({ coffee, total }: CardCoffeeProps){

    return(
        <CardCoffeeContainer>
            <img src={coffee.urlImage}  alt={coffee.title}/>
            <div className="tag-container">
                {coffee.tags.map((tag) => <span className="tag">{tag}</span>)}
            </div>
            <p className="name-coffee">{coffee.title}</p>
            <p className="description">{coffee.description}</p>
            <Price>
                <p className="value">R$<strong> {coffee.price}</strong></p>
                <div className="actions">
                    <ButtonSelect 
                        widthButton="4.5rem" 
                        heightButton="2.375rem"
                        total={0}
                    />
                    <ButtonCart 
                        buttonColor="cart"
                        iconColorButton="cart"
                        total={total}
                        buttonHover="cart"
                        onClickButton={() => console.log('cart')}
                    />
                </div>
            </Price>
        </CardCoffeeContainer>
    )
}