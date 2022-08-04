import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    height: 6.5rem;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;

    nav {
        display: flex;
        gap: 0.75rem;
        
        a {
            display: flex;
            gap: 0.25rem;
        }
    }
`