import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6.375rem;

  & .confirm-ordered {
    display: flex;
    flex-direction: column;
    width: 34.5rem;
    margin-top: 5rem;

    p {
      font-family: "Baloo 2";
      font-weight: 800;
      font-size: 2rem;
      line-height: 1.3;
      color: ${(props) => props.theme["yellow-dark"]};
      margin-bottom: 0.25rem;
    }

    span {
      font-size: 20px;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  img {
    width: 30.75rem;
    height: 18.313rem;
    margin-top: 11.25rem;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${({ theme }) => theme.background};
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 6px 36px;
  margin-top: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;

export const InfoLocal = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme["base-text"]};

  span {
    font-size: 1rem !important;
  }
`;
