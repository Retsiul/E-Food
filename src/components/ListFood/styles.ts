import styled from "styled-components";
import { Container } from "../../utils/styles";
import { variables } from "../../utils/variables";


export const HeaderFooter=styled.header`

position:relative;

&::before{
position: absolute;
top:0;
width:100%;
height:100%;
content:'';
background: #11111173;
z-index:0;
}

${Container}{
display:flex;
flex-direction:column;
height:100%;
justify-content:space-evenly;
padding:0 40px;
color:#fff;
position:relative;

h1{
font-weight: 900;
font-size: 32px;
}

h2{
font-family: Roboto;
font-weight: 100;
font-size: 32px;
}
}



`

export const ContainerList =styled(Container)`
grid-template-columns:1fr 1fr 1fr;
gap:32px;

 div{
padding:0;
margin-top:8px;

}

button{
padding:4px 0;
border:none;
color:auto;
font-weight:700;
font-size:14px;
width:100%;
display:inline-block;
color:${variables.featuredColor};
background:${variables.secondColor};
}
`