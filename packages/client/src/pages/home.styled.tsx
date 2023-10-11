import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  min-height: 90vh;

  video {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: relative;
  }

  @media (max-width: 750px) {
    grid-template-columns: 100vw;
    align-items: center;
  }
`;

export const Title = styled("div")`
  grid-column: 1;
  grid-row: 1;
  z-index: 10;
  padding-top: 13rem;
  color: ${({ theme }) => theme.palette.lightGreen.main};
`;
