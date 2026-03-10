import styled from "styled-components";
import { Card } from "../components/HomeFeaturedFood/styles";
import { breakPoints, variables } from "./variables";

type CardProps = {
  $home?: boolean;
};

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  display: block;
`;
export const Container = styled.div<CardProps>`
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding: 80px 0;

  @media (max-width: ${breakPoints.tablet}) {
    max-width: 80%;
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breakPoints.desktop}) {
    max-width: 80%;
  }

  ${({ $home }) =>
    $home
      ? `
      & ${Card} {
        background: #fff;
      }
    `
      : `
      & ${Card} {
        background:${variables.featuredColor};      
        color:${variables.secondColor};
        padding:8px;

    `}
`;
