import styled from "styled-components";

export const AddressContainer = styled.div`
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
