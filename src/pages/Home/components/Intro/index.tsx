import { ContentTitleItems, IntroContainer, Image } from "./styles";
import cupCoffee from '../../../../assets/banner-cup-coffee.svg'
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { ItemWithIcon } from "../../../../components/ItemWithIcon";

export function Intro(){
    return(
        <IntroContainer>
            <ContentTitleItems>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <div className="list-item">
                    <ItemWithIcon 
                        icon={<ShoppingCart size={16} weight="fill"/>}
                        text="Compra simples e segura"
                        backgroundIconColor="yellowDark"
                    />
                    <ItemWithIcon 
                        icon={<Package size={16} weight="fill"/>}
                        text="Embalagem mantém o café intacto"
                        backgroundIconColor="base"
                    />
                    <ItemWithIcon 
                        icon={<Timer size={16} weight="fill"/>}
                        text="Entrega rápida e rastreada"
                        backgroundIconColor="yellow"
                    />
                    <ItemWithIcon 
                        icon={<Coffee size={16} weight="fill"/>}
                        text="O café chega fresquinho até você"
                        backgroundIconColor="purple"
                    />
                </div>
            </ContentTitleItems>
            <Image>
                <img src={cupCoffee} alt="Coffee delivery"/>
            </Image>
        </IntroContainer>
    )
}