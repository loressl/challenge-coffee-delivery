import styled from "styled-components";

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 4px;

  & .coffe-data {
    display: flex;
    flex-direction: row;

    img {
      width: 4rem;
      height: 4rem;
      margin-right: 1.25rem;
    }

    & .choose-more-coffee {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-right: 50px;

      & .subtitle {
        line-height: 1.3;
        color: ${(props) => props.theme["base-subtitle"]};
      }

      & .more-remove {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        gap: 0.5rem;
      }
    }

    & .value {
      color: ${(props) => props.theme["base-text"]};
      font-weight: 700;
    }
  }
`;

export const ButtonRemove = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  gap: 0.25rem;
  height: 2rem;
  width: 5.688rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  cursor: pointer;

  font-size: 12px;
  text-transform: uppercase;
  color: ${(props) => props.theme["base-text"]};
  line-height: 1.6;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    filter: brightness(0.95);
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme["base-button"]};
`;
