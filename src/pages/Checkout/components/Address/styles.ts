import styled, { css } from "styled-components";

export const AddressContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const OrderedContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 18px;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 15px;
  }

  & .box-address {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40rem;
    height: 23.25rem;
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px;
    margin-bottom: 12px;
    gap: 2rem;
    padding: 40px;
  }

  & .payment {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;
    width: 40rem;
    height: 13rem;
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px;

    & .paymentMethods {
      display: flex;
      width: 35rem;
      flex-direction: row;
      gap: 0.75rem;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1rem;
  width: 35rem;
  height: 12.5rem;
  align-self: stretch;

  & .complement {
    display: flex;
    gap: 0.75rem;
    width: 100%;
  }
`;

export const SelectedCoffesContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 18px;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 15px;
  }

  & .box-coffes-selected {
    display: flex;
    flex-direction: column;
    width: 28rem;
    height: 31.125rem;
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px 44px;
    padding: 2.5rem;
    gap: 1.5rem;

    & .prices {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;

      & .itens {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;

        & .title-price {
          font-size: 14px;
          font-family: "Roboto";
          font-weight: 400;
          color: ${(props) => props.theme["base-text"]};
          margin-bottom: 0;
        }

        span {
          color: ${(props) => props.theme["base-text"]};
        }
      }

      & .total {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;

        & .title-total,
        span {
          font-size: 20px;
          font-family: "Roboto";
          font-weight: 700;
          color: ${(props) => props.theme["base-subtitle"]};
          margin-bottom: 0;
        }
      }
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme["base-button"]};
`;

export const ButtonConfirm = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  height: 2.875rem;
  gap: 0.25rem;

  background: ${(props) => props.theme.yellow};
  border-radius: 6px;

  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  transition: 0.2s;

  &:hover{
    background: ${props => props.theme["yellow-dark"]};
  }
`;
