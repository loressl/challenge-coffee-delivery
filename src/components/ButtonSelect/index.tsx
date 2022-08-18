import { Minus, Plus } from "phosphor-react";
import { ButtonSelectContainer } from "./styles";

interface ButtonSelectProps {
    widthButton: string
    heightButton: string
}

export function ButtonSelect({widthButton, heightButton}:ButtonSelectProps) {
    return (
        <ButtonSelectContainer widthButton={widthButton} heightButton={heightButton}>
            <button>
                <Minus size={14} />
            </button>
            <span>1</span>
            <button>
                <Plus size={14} />
            </button>
        </ButtonSelectContainer>
    )
}