import { Error } from "./styles";

interface ErrorProps {
    text: string
}

export function ErrorComponent ({text}: ErrorProps) {
    return(
        <Error>{text}</Error>
    )
}