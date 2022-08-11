import styled from "styled-components";

export const CardCoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 16rem;
  width: 100%;
  height: 19.375rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
    margin-bottom: 0.75rem;
  }

  & .tag {
    display: flex;
    padding: 4px 8px;
    width: 5.063rem;
    height: 1.313rem;
    background: ${(props) => props.theme["yellow-light"]};
    border-radius: 100px;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  & .name-coffee {
    margin-top: 1rem;
    font-weight: 700;
    font-family: "Baloo 2";
    font-size: 20px;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  & .description {
    margin-top: 0.5rem;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.3;
    color: ${(props) => props.theme["base-label"]};
    padding: 0 20px 0 20px;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-top: 33px;
  gap: 29px;

  & .value {
    font-size: 14px;
    line-height: 1.3;
    text-align: right;
    color: ${(props) => props.theme["base-text"]};

    strong {
      font-family: "Baloo 2";
      font-weight: 800;
      font-size: 24px;
      line-height: 1.3;
    }
  }

  & .actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const ButtonSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  gap: 4px;
  width: 4.5rem;
  height: 2.375rem;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  span {
    text-align: center;
    color: ${(props) => props.theme["base-title"]};
  }

  button {
    color: ${(props) => props.theme["purple-dark"]};
    display: flex;
    height: 100%;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:disabled {
      cursor: not-allowed;
    }
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    &:hover {
      filter: brightness(0.95);
    }
  }
`;
