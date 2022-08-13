import styled, { css } from "styled-components";

export const AddressContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
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

    & .address-title {
      display: flex;
      flex-direction: row;
      width: 100%;
      max-width: 35rem;
      height: 2.75rem;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme["yellow-dark"]};
      }

      & .phrase {
        display: flex;
        flex-direction: column;

        span:first-of-type {
          color: ${(props) => props.theme["base-subtitle"]};
          line-height: 1.3;
          align-self: stretch;
          margin-bottom: 2px;
        }

        span:nth-child(2) {
          color: ${(props) => props.theme["base-text"]};
          font-size: 14px;
          line-height: 1.3;
          align-self: stretch;
        }
      }
    }
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

  & .complement{
    display: flex;
    gap: 0.75rem;
    width: 100%;
  }
`

interface InputFieldProps {
  widthInput: string
}

export const InputField = styled.input<InputFieldProps>`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  width: ${props => props.widthInput};
  border-radius: 4px;
`

export const SelectedCoffesContainer = styled.div``;
