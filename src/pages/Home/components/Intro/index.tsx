import { ContentTitleItems, IntroContainer, Image } from "./styles";
import cupCoffee from '../../../../assets/banner-cup-coffee.svg'
import { Item } from "../Item";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { ReactElement } from "react";

type ListItem = {
    id: string,
    icon: ReactElement,
    text: string,
    backgroundIconColor: "yellow" | "purple" | "base" | "yellowDark"
}

const listItem = [
    {
        id: "shopping-cart-fill",
        icon: <ShoppingCart size={16} weight="fill"/>,
        text: "Compra simples e segura",
        backgroundIconColor: "yellowDark"
    },
    {
        id: "package-fill",
        icon: <Package size={16} weight="fill"/>,
        text: "Embalagem mantém o café intacto",
        backgroundIconColor: "base"
    },
    {
        id: "timer-fill",
        icon: <Timer size={16} weight="fill"/>,
        text: "Entrega rápida e rastreada",
        backgroundIconColor: "yellow"
    },
    {
        id: "coffee-fill",
        icon: <Coffee size={16} weight="fill"/>,
        text: "O café chega fresquinho até você",
        backgroundIconColor: "purple"
    },
] as ListItem[]

export function Intro(){
    return(
        <IntroContainer>
            <ContentTitleItems>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <div className="list-item">
                    {listItem.map((item) => (
                        <Item
                            key={item.id}
                            icon={item.icon} 
                            backgroundIconColor={item.backgroundIconColor}
                            text={item.text}
                        />
                    ))}
                </div>
            </ContentTitleItems>
            <Image>
                <img src={cupCoffee} alt="Coffee delivery"/>
            </Image>
        </IntroContainer>
    )
}