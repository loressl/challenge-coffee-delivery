import { ReactElement, ReactNode } from "react";
import { IconContainer, ItemWithIconContainer } from "./styles";

interface ItemWithIconProps {
    backgroundIconColor: "yellow" | "purple" | "base" | "yellowDark"
    icon: ReactElement
    text: string | ReactNode
}

export function ItemWithIcon({ backgroundIconColor, icon, text }: ItemWithIconProps) {
    return (
        <ItemWithIconContainer>
            <IconContainer colorBackgroundIcon={backgroundIconColor}>
                {icon}
            </IconContainer>
            {typeof text === 'string' ?
                <p className="text">{text}</p>
                : text 
            }
        </ItemWithIconContainer>
    )
}