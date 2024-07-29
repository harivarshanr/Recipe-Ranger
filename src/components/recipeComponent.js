import styled from "styled-components";

export const RecipeContainer=styled.div`
display:flex;
flex-direction: column;
padding:30px;
width:300px;
box-shadow:0 3px 6px 0 black;
`;
export const CoverImage=styled.img`
height:200px;

`;
export const RecipeName=styled.span`
font-size: 18px;
 font-weight: bold;
color: black;
 margin: 10px 0;
`;
export const IngredientsText=styled.span`
font-size: 18px;
border: solid 1px green;
color: black; 
margin: 10px 0; 
cursor: pointer;
padding: 10px 15px; 
border-radius: 4px; 
color: green;
text-align: center;
margin-bottom:2px;
`;
export const SeeMore=styled(IngredientsText)`
color: #eb3300;
border: solid 1px #eb3300;
`;