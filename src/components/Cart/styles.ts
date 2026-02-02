import styled from "styled-components";
import { variables } from "../../utils/variables";
import trashIcon from '../../assets/icon-trash.svg'
type Props={
    isOpen:boolean
}

export const Overlay=styled.div`
position: absolute;
top:0;
width:100%;
height:100%;
content:'';
background: #11111173;
position:fixed;
`

export const CartContainer= styled.div<Props>`
position: fixed;
display: ${({ isOpen }) => (isOpen ? "flex" : "none")};

width:100%;
top:0;
left:0;
justify-content:flex-end;


div{
width:100%;

p{
display:flex;
justify-content:space-between;
margin-bottom:8px;
font-size:14px;
font-weight:700;
}

button{
background:${variables.secondColor};
color:${variables.featuredColor};
border:none;
width:100%;
display:block;
padding:4px 0;
font-size:14px;
font-weight:700;
}
}

`

export const Sidebar=styled.aside`
max-width:360px;
width:100%;
background:${variables.featuredColor};
color:${variables.secondColor};
height:100vh;
z-index:0;
padding:32px 8px 0 8px;

`

export const Card= styled.li`
display:flex;
width:100%;
color:${variables.featuredColor};
background:${variables.secondColor};
padding:8px;
position:relative;
margin-bottom:32px;

img{
width:80px;
aspect-ratio:1/1;
object-fit:cover;
display:block;
margin-right:8px;
}

div{

h3{
margin-bottom:16px;
font-size:18px;
font-weight:bold;
}

p{
font-size:14px;
font-weight:400;
}

}

button{
background:transparent;
background-image:url(${trashIcon});
border:none;
width:16px;
aspect-ratio:1/1;
display:block;
position:absolute;
bottom:8px;
right:8px;
cursor:pointer;
}

`