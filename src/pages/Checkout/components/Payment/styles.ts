import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  width: 40rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  & .paymentMethods {
    display: flex;
    width: 35rem;
    flex-direction: row;
    gap: 0.75rem;
  }
`;

// export const ButtonPaymentContainer = styled.div`
//   display: flex;
//   width: 11.167rem;
//   flex-direction: row;
//   align-items: center;
//   padding: 1rem;
//   gap: 0.75rem;
//   border-radius: 6px;
//   background: ${(props) => props.theme["base-button"]};
//   cursor: pointer;
//   transition: 0.2s;

//   font-size: 0.75rem;
//   line-height: 1.6;
//   text-transform: uppercase;
//   color: ${(props) => props.theme["base-text"]};

//   svg {
//     color: ${(props) => props.theme.purple};
//   }

//   &:hover {
//     background: ${(props) => props.theme["base-hover"]};
//   }

//   &:focus {
//     border: 1px solid ${(props) => props.theme.purple};
//     background: ${(props) => props.theme["purple-light"]};
//     box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
//   }
// `;

export const ButtonPaymentContainer = styled.span`
  display: flex;
  width: 11.167rem;
  float: left;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};

  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${(props) => props.theme["base-text"]};

  svg {
    color: ${(props) => props.theme.purple};
  }

  input[type="radio"] {
    opacity: 0;
    display: none;
  }

  input[type="radio"] + label {
    cursor: pointer;
    background: inherit;
    border-radius: inherit;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0);
  }

  input[type="radio"]:checked + label {
    background: ${(props) => props.theme["purple-light"]};
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    border: 1px solid ${(props) => props.theme.purple};
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 1rem;
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
`;

export const Error = styled.span`
  margin-bottom: 0px;
  color: ${props => props.theme.error};
  font-size: 12px;
  font-style: italic;
`