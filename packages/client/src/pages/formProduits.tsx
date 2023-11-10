import { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { MenuItem, MenuList } from "@mui/material";

import * as S from "./formProduits.styled";

type Bateau = {
  model: string;
  displacement: number;
  speed_max: number;
  length: number;
  tankfuelcapacity: number;
  eng_power: number;
  id_type: number;
  price: number;
  photo: string;
};

type Props = {
  element?: Bateau;
  hidden?: boolean;
};
const CardProduits: React.FC<Props> = ({ element }) => {
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    console.log(element?.photo);
    if (element?.photo) {
      setDataUrl(`data:image/jpeg;base64,${element.photo}`);
    }
  }, [element]);

  return (
    <S.MainContainer
      sx={{
        width: { xs: "90vw", md: "20vw" },
        height: { xs: "60vh", md: "100%" },
        backgroundColor:
          "linear-gradient(180deg, rgba(123,201,188,0.8548553210346639) 47%, rgba(16,86,83,1) 100%);",
      }}
    >
      <CardHeader title={element?.model} subheader={element?.model} />
      <CardMedia
        component="img"
        height="196"
        image={dataUrl}
        alt={element?.model}
      />
      <CardContent>
        <Typography variant="h4" component="div">
          Type: {element?.id_type === 1 ? "Catamaran" : "Yacht"}
        </Typography>

        <MenuList
          id="composition-menu"
          aria-labelledby="composition-button"
          sx={{ width: "20vw" }}
        >
          <MenuItem
            sx={{
              fontSize: { xs: "0.7rem", md: "1rem" },
              py: 0,
              minHeight: { xs: "0", md: "48" },
            }}
          >
            Displacement: {element?.displacement}
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: { xs: "0.7rem", md: "1rem" },
              py: 0,
              minHeight: { xs: "0", md: "48" },
            }}
          >
            SpeedMax: {element?.speed_max}
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: { xs: "0.7rem", md: "1rem" },
              py: 0,
              minHeight: { xs: "0", md: "48" },
            }}
          >
            Length: {element?.length}
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: { xs: "0.7rem", md: "1rem" },
              py: 0,
              minHeight: { xs: "0", md: "48" },
            }}
          >
            TankFuelCapacity: {element?.tankfuelcapacity}
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: { xs: "0.7rem", md: "1rem" },
              py: 0,
              minHeight: { xs: "0", md: "48" },
            }}
          >
            Eng Power {element?.eng_power}
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: { xs: "0.7rem", md: "1rem" },
              py: 0,
              minHeight: { xs: "0", md: "48" },
            }}
          >
            Prix: {element?.price}
          </MenuItem>
        </MenuList>
      </CardContent>
    </S.MainContainer>
  );
};

export default CardProduits;
