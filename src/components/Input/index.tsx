import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    widthCustom: string
    optional?: string
}

export function Input({widthCustom, optional, ...props}: InputProps) {
    return(
        <InputContainer widthCustom={widthCustom}>
            <input {...props}/>
            {optional && <span>{optional}</span>}
        </InputContainer>
    )
}