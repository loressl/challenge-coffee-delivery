import { useEffect, useState } from "react";
import { useCoffee } from "../../hooks/useCoffee";
import { api } from "../../services/api";
import { Coffee } from "../../types";
import { CardCoffee } from "./components/CardCoffee";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

interface CoffeeItemsAmount {
    [key: number]: number
}

export function Home() {
    const [coffeesList, setCoffeesList] = useState<Coffee[]>([])
    const {coffees} = useCoffee()
    
    const coffeeItemsAmount = coffees.reduce((sumAmount, coffee) => {
        sumAmount[coffee.id] = coffee.amount
        return sumAmount
    }, {} as CoffeeItemsAmount)
    
    useEffect(() => {
        const loadCoffees = async () => {
            await api.get('/coffees')
            .then(response => {
                setCoffeesList(response.data)
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
                    {coffeesList.length && (
                        coffeesList.map((coffee) => (
                            <CardCoffee 
                                key={coffee.id}
                                coffee={{
                                    id: coffee.id,
                                    title: coffee.title,
                                    description: coffee.description,
                                    urlImage: coffee.urlImage,
                                    price: coffee.price,
                                    tags: coffee.tags,
                                    amount: coffeeItemsAmount[coffee.id] || 0
                                }}
                            />
                        ))
                    )}
                </div>
            </div>
        </HomeContainer>
    )
}