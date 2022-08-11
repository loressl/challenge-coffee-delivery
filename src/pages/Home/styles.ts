import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  & .coffee-list-container{
    display: flex;
    flex-direction: column;

    & .title-container {
      margin-top: 2rem;
      margin-left: calc(50% - 193px/2 - 463.5px);
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 2rem;
      line-height: 1.3;
      color: ${props => props.theme["base-subtitle"]};
    }

    & .coffee-list{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      max-width: 70rem;
      width: 100%;
      margin-top: 3.375rem;
    }
  }
`;
