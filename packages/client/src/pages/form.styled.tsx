import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CContainer = styled("div")`
  width: 100%;
  padding-top: 10rem;
  min-height: 90vh;
  text-align: center;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

export const FormContainer = styled("div")`
  padding-top: 17vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 20vh;
  padding-bottom: 10vh;
  color: ${({ theme }) => theme.palette.colorWhite.main};

  @media (max-width: 750px) {
    padding-top: 7vh;
  }
`;

export const FlexContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  @media (max-width: 750px) {
    width: 40vw;
    align-items: start;
    padding-top: 13vh;
  }
`;

export const InputContainer = styled("div")<{ isinscrit: boolean }>`
  display: ${({ isinscrit }) => (isinscrit ? "none" : "block")};
  padding-top: 15vh;
`;

export const Inscrivez = styled("div")`
  color: ${({ theme }) => theme.palette.colorWhite.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 1rem;
  margin-top: 6rem;
  cursor: pointer;
`;

export const Form = styled("div")`
  color: ${({ theme }) => theme.palette.colorWhite.main};
  padding-bottom: 5%;
`;

export const ButtonLogin = styled(Button)<{ isinscrit: boolean }>`
  margin: 1vw;
  background-color: ${({ isinscrit, theme }) =>
    isinscrit ? "transparent" : theme.palette.secondary.main};
  border: solid black;
  width: 15vw;
  min-width: 15vw;
  border-radius: 20px;
  color: ${({ theme }) => theme.palette.primary.main};

  @media (max-width: 750px) {
    width: 30vw;
  }
`;

export const UserData = styled("div")<{ isinscrit: boolean }>`
  display: ${({ isinscrit }) => (isinscrit ? "block" : "none")};
  color: black;
`;
