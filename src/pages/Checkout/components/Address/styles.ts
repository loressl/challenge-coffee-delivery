import styled, { css } from "styled-components";

export const AddressContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
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
    width: 28rem;
    height: 31.125rem;
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px 44px;
    padding: 2.5rem;
    gap: 1.5rem;
  }
`;