import { rgba } from "polished";
import styled from "styled-components";
import backgroundIntro from '../../../../assets/background-intro.svg'

export const IntroContainer = styled.div`
  display: flex;
  background: ${({ theme }) => `url(${backgroundIntro}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.white} 0%,
        ${rgba(theme.background, 0.2)} 50%,
        ${theme.background} 100%
      )`};
  background-size: cover;
  width: 100%;
  height: 34rem;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 3.5rem;
  flex-wrap: wrap;

  @media(max-width: 1000px) {
    height: 100%;
  }
`;

export const ContentTitleItems = styled.div`
  display: flex;
  width: 100%;
  max-width: 36.75rem;
  flex-direction: column;
  height: inherit;
  justify-content: center;

  h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 48px;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 1rem;
  }

  p {
    font-size: 20px;
    line-height: 1.3;
    font-stretch:100;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  & .list-item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 4.125rem;
    grid-row-gap: 1.25rem;
  }
`;

export const Image = styled.div`
  display: flex;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`;

