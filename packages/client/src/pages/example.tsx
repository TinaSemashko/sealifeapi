import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "../axios";
import * as S from "./example.styled";
import { useEffect, useState } from "react";
import CardProduits from "./formProduits";
import { useSnackbar } from "notistack";

interface Bateau {
  model: string;
  displacement: number;
  speed_max: number;
  length: number;
  tankfuelcapacity: number;
  eng_power: number;
  id_type: number;
  price: number;
  photo: string;
}

const Example: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [bateaudata, setBateaudata] = useState<Bateau[]>([]);
  const [userAPIKey, setUserAPIKey] = useState("");
  const [search, setBateaux] = useState("");
  const userIdCourant = localStorage.getItem("usrCourant");

  const fetchGetUserById = async () => {
    const request = {
      params: {
        id: userIdCourant,
        api_key: userAPIKey,
      },
    };
    await axios
      .get(`getuserbyid`, request)
      .then((response) => {
        setUserAPIKey(response.data.results[0].api_key);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (userIdCourant && !userAPIKey) {
      fetchGetUserById();
    }
  }, [userIdCourant]);

  const fetchGet = async (endpoint: string) => {
    const headers = {
      params: {
        data: search,
        api_key: userAPIKey,
      },
    };
    await axios
      .get(endpoint, headers)
      .then((response) => {
        setBateaudata(response.data.results[0] as Bateau[]);
      })
      .catch((err) => {
        enqueueSnackbar(err.message, {
          variant: "error",
        });
      });
  };

  const handleGetBateaux = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBateaux(event.target.value);
  };

  const getBateauxParType = () => {
    fetchGet("bateauxbytype");
  };

  const getBateauxParModel = () => {
    fetchGet("bateauxbymodel");
  };

  useEffect(() => {
    console.log(bateaudata);
    if (!bateaudata)
      enqueueSnackbar("Erreur", {
        variant: "error",
      });
  }, [bateaudata]);

  return (
    <S.MainContainer>
      <S.Cont>
        <Typography variant="h2">Page exemple API</Typography>
        <S.FlexContainer>
          <S.Search>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                border: 3,
                borderRadius: 2,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Type"
                inputProps={{ "aria-label": "boat" }}
                onChange={handleGetBateaux}
              />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={() => getBateauxParType()}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </S.Search>
          <S.Search>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                border: 3,
                borderRadius: 2,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Modele"
                inputProps={{ "aria-label": "boat" }}
                onChange={handleGetBateaux}
              />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={() => getBateauxParModel()}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </S.Search>
        </S.FlexContainer>
        <S.GridContainer>
          {bateaudata.slice(0, 15).map((item, index) => (
            <CardProduits key={index} element={item} />
          ))}
        </S.GridContainer>
      </S.Cont>
    </S.MainContainer>
  );
};

export default Example;
