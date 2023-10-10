import { Typography } from "@mui/material";
import * as S from "./home.styled";
import catamaran from "../movie/catamaranMovie.mp4"

const Home: React.FC = () => {
  return (
    <S.MainContainer>
      <video src={catamaran} autoPlay loop muted />
      <S.Title>
        <Typography variant="h1" fontFamily='"Chicle", cursive' sx={{ my: 2 }}>
          SeaLifeAPI
        </Typography>
      </S.Title>
    </S.MainContainer>
  );
};

export default Home;
