import { Minus, Plus } from "phosphor-react";
import { ButtonSelectContainer } from "./styles";

interface ButtonSelectProps {
    widthButton: string
    heightButton: string
    total: number
    onIncrement: () => void
    onDecrement:() => void
}

export function ButtonSelect({widthButton, heightButton, total, onIncrement, onDecrement}:ButtonSelectProps) {
    return (
        <ButtonSelectContainer widthButton={widthButton} heightButton={heightButton}>
            <button onClick={onDecrement} disabled={total < 1}>
                <Minus size={14} />
            </button>
            <span>{total}</span>
            <button onClick={onIncrement}>
                <Plus size={14} />
            </button>
        </ButtonSelectContainer>
    )
}