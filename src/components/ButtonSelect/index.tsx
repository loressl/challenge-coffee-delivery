import { Minus, Plus } from "phosphor-react";
import { ButtonSelectContainer } from "./styles";

interface ButtonSelectProps {
    widthButton: string
    heightButton: string
    total: number
}

export function ButtonSelect({widthButton, heightButton, total}:ButtonSelectProps) {
    return (
        <ButtonSelectContainer widthButton={widthButton} heightButton={heightButton}>
            <button>
                <Minus size={14} />
            </button>
            <span>{total}</span>
            <button>
                <Plus size={14} />
            </button>
        </ButtonSelectContainer>
    )
}