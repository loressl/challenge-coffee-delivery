import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from 'react-toastify'
import { api } from "../services/api";
import { Coffee } from "../types";

interface CartCoffeeProviderProps {
    children: ReactNode
}

interface UpdateCoffeeAmount {
    coffeeId: number
    amount: number
}

interface CartCoffeeData {
    coffees: Coffee[]
    addCoffee: (coffeeId: number) => Promise<void>
    updateCoffeeAmount: ({coffeeId, amount}: UpdateCoffeeAmount) => void
    deliveryFee: number
    removeCoffee: (coffeeId: number) => void
}

const CartCoffeeContext = createContext<CartCoffeeData>({} as CartCoffeeData)

export function CartCoffeeProvider({ children }: CartCoffeeProviderProps) {
    const deliveryFee = 3.5
    const [coffees, setCoffees] = useState<Coffee[]>(() => {
        const storagedCoffee = localStorage.getItem('@RocketCoffee:coffee')

        if (storagedCoffee) {
            return JSON.parse(storagedCoffee)
        }

        return []
    })

    const addCoffee = async (coffeeId: number) => {
        try {
            let listCoffee = [...coffees] as Coffee[]
            const verifyProductInCartCoffee = coffees.find((item) => item.id === coffeeId)
            const amount = !verifyProductInCartCoffee ? 0 : verifyProductInCartCoffee.amount

            if (!verifyProductInCartCoffee) {
                const coffee = await api.get(`/coffees/${coffeeId}`).then(response => response.data)
                coffee.amount = 1
                listCoffee.push(coffee)
            } else {
                verifyProductInCartCoffee.amount = amount + 1
            }
            setCoffees(listCoffee)
            localStorage.setItem('@RocketCoffee:coffee', JSON.stringify(listCoffee))
        } catch (error) {
            toast.error('Erro na adição do café')
        }
    }

    const updateCoffeeAmount = async({coffeeId, amount}: UpdateCoffeeAmount)=>{
        try {
            if (amount < 0){
                return
            }

            const newListCoffee = [...coffees]
            const coffee= newListCoffee.find((item) => item.id === coffeeId)

            if(coffee){
                if (amount) {
                    coffee.amount = amount
                    setCoffees(newListCoffee)
                    localStorage.setItem('@RocketCoffee:coffee', JSON.stringify(newListCoffee))
                } else {
                    setCoffees([])
                    localStorage.removeItem('@RocketCoffee:coffee')
                }
            }
        } catch (error) {
            toast.error('Erro na alteração de quantidade do produto')
        }
    }

    const removeCoffee = (coffeeId: number) => {
        try {
            const newListCoffee = [...coffees]
            const coffeeIndex = newListCoffee.findIndex((item) => item.id === coffeeId)
            if(coffeeIndex >= 0) {
                newListCoffee.splice(coffeeIndex, 1)
                setCoffees(newListCoffee)
                localStorage.setItem('@RocketCoffee:coffee', JSON.stringify(newListCoffee))
            } else {
                throw Error()
            }
        } catch (error) {
            toast.error('Erro na remoção do produto')
        }
    }

    return (
        <CartCoffeeContext.Provider value={{ coffees, addCoffee, updateCoffeeAmount, deliveryFee, removeCoffee }}>
            {children}
        </CartCoffeeContext.Provider>
    )
}

export function useCoffee(): CartCoffeeData {
    const context = useContext(CartCoffeeContext)

    return context
}