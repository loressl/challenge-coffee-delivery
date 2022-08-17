import { ReactElement } from "react";
import { FrameContainer } from "./styles";

interface FrameProps {
    icon: ReactElement
    title: string
    subtitle: string
    colorIcon: "yellowDark" | "purple"
}

export function Frame({icon, title, subtitle, colorIcon}: FrameProps) {
    return (
        <FrameContainer colorIcon={colorIcon}>
            {icon}
            <div className="phrase">
                <span>{title}</span>
                <span>{subtitle}</span>
            </div>
        </FrameContainer>
    )
}