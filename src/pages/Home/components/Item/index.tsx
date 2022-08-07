import { ItemContainer } from "./styles";
import { ReactElement } from "react";

interface ItemProps {
    backgroundIconColor:  "yellow" | "purple" | "base" | "yellowDark"
    icon: ReactElement
    text: string
}

export function Item({backgroundIconColor, icon, text}: ItemProps){
    return(
        <ItemContainer colorBackgroundIcon={backgroundIconColor}>
            <div>
                {icon}
            </div>
            <p className="text">{text}</p>
        </ItemContainer>
    )
}