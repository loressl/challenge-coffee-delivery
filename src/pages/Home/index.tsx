import { useEffect, useState } from "react";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

export function Home() {
    const [teste, setTeste] = useState('')

    useEffect(() => {
        const loadCoffees = async () => {
            await fetch('http://localhost:3000/coffees')
                .then(response => response.json())
                .then(data => setTeste(data[0].urlImage))
        }

        loadCoffees()

    }, [])

    console.log(teste)

    return (
        <HomeContainer>
            <Intro />
            <div className="coffee-list-container">
                <p>Nossos cafés</p>
                <div className="coffee-list">
                    {/* <img src={teste} alt="teste" /> */}
                </div>
            </div>
        </HomeContainer>
    )
}