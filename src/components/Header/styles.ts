import styled from "styled-components";

export const HeaderContainer = styled.header.attrs(props => ({
    className: props.className
}))`
    display: flex;
    width: 100%;
    max-width: 90rem;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;

    div {
        display: flex;
        gap: 0.75rem;
        align-items: center;

        & .location {
            display: flex;
            padding: 0.5rem;
            gap: 0.25rem;
            border-radius: 6px;
            background: ${props => props.theme["purple-light"]};
            font-size: 14px;
            line-height: 1.3;
            flex: 1;
            color: ${props => props.theme["purple-dark"]};

            svg {
                color: ${props => props.theme["purple"]};
            }
        }
    }
`