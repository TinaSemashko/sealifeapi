import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  display: grid;
  grid-template-columns: 40% 60%;
  min-height: 90vh;
`;

export const Title = styled("div")`
  padding-top: 15vh;
  grid-column: 1 / span 2;
  text-align: center;
`;

export const ApiListItem = styled("div")`
  grid-column: 1;
`;

export const ApiFuncItem = styled("div")`
  grid-column: 2;
`;

export const FnGetList = styled("div")`
  padding-left: 10vw;
  width: 50vw;
`;
