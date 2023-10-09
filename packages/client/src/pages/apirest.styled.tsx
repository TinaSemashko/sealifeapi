import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  display: grid;
  grid-template-columns: 30% 70%;
  min-height: 100vh;
`;

export const Title = styled("div")`
  padding-top: 15vh;
  grid-column: 1 / span 2;
  text-align: center;
`;

export const ApiList = styled("div")`
  grid-column: 1;
`;

export const ApiFunc = styled("div")`
  grid-column: 2;
`;

export const FnGetList = styled("div")`
  padding-left: 10vw;

  width: 50vw;
`;
