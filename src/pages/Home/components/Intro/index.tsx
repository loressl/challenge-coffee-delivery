import { ContentTitleItems, IntroContainer, Image } from "./styles";
import cupCoffee from '../../../../assets/banner-cup-coffee.svg'

export function Intro(){
    return(
        <IntroContainer>
            <ContentTitleItems>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </ContentTitleItems>

            <Image>
                <img src={cupCoffee} alt="Coffee delivery"/>
            </Image>
        </IntroContainer>
    )
}