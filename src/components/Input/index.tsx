import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps {
    widthCustom: string
    optional?: string
    inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export function Input({widthCustom, optional, inputProps}: InputProps) {
    return(
        <InputContainer widthCustom={widthCustom}>
            <input {...inputProps}/>
            {optional && <span>{optional}</span>}
        </InputContainer>
    )
}