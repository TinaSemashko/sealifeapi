import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  min-height: 100vh;
`;

export const Cont = styled("div")`
  padding-top: 10%;
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
`;

export const Search = styled("div")`
  text-align: center;
`;

export const FlexContainer = styled("div")`
  display: flex;
`;

export const GridContainer = styled("div")`
  margin-top: 10%;
  margin-bottom: 10%;
  grid-gap: 1%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;

  @media (max-width: 750px) {
    grid-template-columns: 100vw;
    align-items: center;
    grid-gap: 0%;
  }
`;
