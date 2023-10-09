import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
import axios from "../axios";

import * as S from "./apirest.styled";

interface User {
  id: number;
  email: string;
  password: string;
  api_key: string;
}

const Api: React.FC = () => {
  const [userdata, setUserdata] = useState<User>();
  const userIdCourant = localStorage.getItem("usrCourant");

  const fetchGet = async () => {
    const request = {
      params: {
        id: userIdCourant ? userIdCourant : 0,
      },
    };
    await axios
      .get(`getuserbyid`, request)
      .then((response) => {
        setUserdata(response.data.results[0] as User);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchGet();
  }, []);

  return (
    <S.MainContainer>
      <S.Title>
        <Typography variant="h3">API REST</Typography>
        <Typography variant="h6">API_Key: {userdata?.api_key} </Typography>
      </S.Title>
      <S.ApiList>
        <Typography variant="h4">GET Bateau list</Typography>
        <Typography variant="h4">GET Bateau by name</Typography>
      </S.ApiList>
      <S.ApiFunc>
        <S.FnGetList>
          <SyntaxHighlighter language="javascript" style={agate}>
            {` API_Url: http:\/\/localhost:4000/api/bateaux?apikey=\${APIKey}
    const fetchGet = async () => {
    await axios
    .get(APIUrl)
    .then(response => console.log(response))
     .catch((error) => console.error(error);
     );
   };
        `}
          </SyntaxHighlighter>
        </S.FnGetList>
      </S.ApiFunc>
    </S.MainContainer>
  );
};

export default Api;
