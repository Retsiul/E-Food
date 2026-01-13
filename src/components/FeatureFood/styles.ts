import styled,{css} from "styled-components";
import { variables } from "../../utils/variables";


export const Card = styled.div`

position:relative;
border:1px solid;
padding-bottom:8px;

img{
width:100%;
aspect-ratio:20/9;
display:block;
object-fit:cover;}
`;

export const ContainerTag=styled.div`
  position: absolute;
 top: 16px;
 display:flex;
 justify-content:flex-end;
 gap:8px;
 padding-right:8px;
  width:100%;
`

export const InfoCard=styled.div`
padding:8px ;
padding-bottom:0;
margin-bottom:16px;


div{
display:flex;
flex-wrap:wrap;
justify-content:space-between;

h3{
font-weight:700;
font-size:18px;
margin-bottom:8px;
display:flex;


img{
margin-left:8px;
object-fit:contain;
width:100%;
display:block;}
}
}


p{
font-weight:400;
font-size:14px;
line-height:22px;

}
`

const base = css`
  padding:  4px 6px;
  font-size: 14px;
  display:inline-block;
  font-weight:700;
  text-decoration:none;
  background:${variables.featuredColor};
  color:${variables.secondColor};
`;

const badge = css`
  font-size: 12px;
 
`;

const button = css`
  position: relative;
  margin-left:8px;
  border:none;
  font-size: 14px;


`;

export const Tag = styled.span<{ $variant?: "badge" | "button" }>`
  ${base}

  ${({ $variant }) => ($variant === "badge" ? badge : button)}
`;
