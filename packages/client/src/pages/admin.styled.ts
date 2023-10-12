import { styled } from "@mui/material/styles";
import img from "../images/fon_admin.png";

export const MainContainer = styled("div")`
  background-image: url(${img});
  background-size: cover;
  padding-top: 15vh;
  display: block;
  text-align: center;
  min-height: 100vh;
  @media (max-width: 750px) {
  }
`;

export const GridContainer = styled("div")`
  width: 95%;
  display: grid;
  grid-template-columns: 12% 22% 22% 22% 22%;
  grid-template-rows: auto;
  justify-items: center;

  @media (max-width: 750px) {
    grid-template-columns: 100vw;
    align-items: center;
  }
`;

export const TextFieldContainer = styled("div")`
  display: flex;
  justify-content: "center";

  .MuiTextField-root.Mui-selected {
    color: red;
  }

  .MuiOutlinedInput-root.Mui-error {
    color: red;
  }

  @media (max-width: 750px) {
  }
`;

export const Admin = styled("div")<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  @media (max-width: 750px) {
  }
`;
