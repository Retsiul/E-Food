import styled from "styled-components";
import logoEfood from '../assets/logo.svg'
import { Card } from "../components/FeatureFood/styles";
import { variables } from "./variables";


type CardProps={
  $home?:boolean
}

export const Logo= styled.div`
background-image:url(${logoEfood});
width:125px;
height:57.5px;
`
export const Container = styled.div<CardProps>`
width:100%;
margin:0 auto;
max-width:1024px;
display:grid;
grid-template-columns:1fr 1fr;
gap:80px;
padding: 80px 0;


  ${({ $home }) =>
    $home ?
    `
      & ${Card} {
        background: #fff;
      }
    `: `
      & ${Card} {
        background:${variables.featuredColor};      
        color:${variables.secondColor};
        padding:8px;

    `}
`;
