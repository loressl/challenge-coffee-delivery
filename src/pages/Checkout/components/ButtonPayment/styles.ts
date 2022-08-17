import styled from "styled-components";

export const ButtonPaymentContainer = styled.button`
  display: flex;
  width: 11.167rem;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  cursor: pointer;
  transition: 0.2s;

  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${(props) => props.theme["base-text"]};

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  &:focus{
    border: 1px solid ${props=> props.theme.purple};
    background: ${props => props.theme["purple-light"]};
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
  }

`;
