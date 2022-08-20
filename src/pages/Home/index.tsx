import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CardCoffee, Coffee } from "./components/CardCoffee";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

export function Home() {
    const [coffees, setCoffees] = useState<Coffee[]>([])

    useEffect(() => {
        const loadCoffees = async () => {
            await api.get('/coffees')
            .then(response => {
                setCoffees(response.data)
            })
        }

        loadCoffees()

    }, [])

    return (
        <HomeContainer>
            <Intro />
            <div className="coffee-list-container">
                <p className="title-container">Nossos cafés</p>
                <div className="coffee-list">
                    {coffees.length && (
                        coffees.map((coffee) => (
                            <CardCoffee 
                                key={coffee.id}
                                coffee={{
                                    id: coffee.id,
                                    title: coffee.title,
                                    description: coffee.description,
                                    urlImage: coffee.urlImage,
                                    price: coffee.price,
                                    tags: coffee.tags
                                }}
                                total={0}
                            />
                        ))
                    )}
                    {/* <img src={teste} alt="teste" /> */}
                </div>
            </div>
        </HomeContainer>
    )
}