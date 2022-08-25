import { Minus, Plus } from "phosphor-react";
import { ButtonSelectContainer } from "./styles";

interface ButtonSelectProps {
    widthButton: string
    heightButton: string
    total: number
    onIncrement: () => void
    onDecrement:() => void
    disabledButton?: boolean
}

export function ButtonSelect({widthButton, heightButton, total, onIncrement, onDecrement, disabledButton}:ButtonSelectProps) {
    return (
        <ButtonSelectContainer widthButton={widthButton} heightButton={heightButton}>
            <button onClick={onDecrement} disabled={disabledButton}>
                <Minus size={14} />
            </button>
            <span>{total}</span>
            <button onClick={onIncrement}>
                <Plus size={14} />
            </button>
        </ButtonSelectContainer>
    )
}