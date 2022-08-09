import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

export function Home() {
    return(
        <HomeContainer>
            <Intro/>
            <div className="coffee-list-container">
                <p>Nossos cafés</p>
                <div className="coffee-list">

                </div>
            </div>
        </HomeContainer>
    )
}