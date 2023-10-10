import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
import axios from "../axios";
import {
  APIURL_GET_ALL_BATEAUX,
  APIURL_GET_BATEAUX_BY_MODEL_OR_TYPE,
} from "../constants/apiurls";

import * as S from "./apirest.styled";

interface User {
  id: number;
  email: string;
  password: string;
  api_key: string;
}

const Apirest: React.FC = () => {
  const [userdata, setUserdata] = useState<User>();
  const userIdCourant = localStorage.getItem("usrCourant");
  const RequestGet = `
    const fetchGet = async () => {
    await axios
    .get(APIUrl)
    .then(response => console.log(response))
     .catch((error) => console.error(error);
     );
   };
        `;

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
      <S.ApiListItem>
        <Typography variant="h4">GET Bateau list</Typography>
        <Typography variant="h6">{APIURL_GET_ALL_BATEAUX}</Typography>
      </S.ApiListItem>
      <S.ApiFuncItem>
        <SyntaxHighlighter language="javascript" style={agate}>
          {RequestGet}
        </SyntaxHighlighter>
      </S.ApiFuncItem>
      <S.ApiListItem>
        <Typography variant="h4">GET Bateau by name or by type</Typography>
        <Typography variant="h6">
          {APIURL_GET_BATEAUX_BY_MODEL_OR_TYPE}
        </Typography>
      </S.ApiListItem>
      <S.ApiFuncItem>
        <SyntaxHighlighter language="javascript" style={agate}>
          {RequestGet}
        </SyntaxHighlighter>
      </S.ApiFuncItem>
      <S.ApiListItem>
        <Typography variant="h4">GET Reviews</Typography>
        <Typography variant="h6">{}</Typography>
      </S.ApiListItem>
      <S.ApiFuncItem>
        <SyntaxHighlighter language="javascript" style={agate}>
          {RequestGet}
        </SyntaxHighlighter>
      </S.ApiFuncItem>
      <S.ApiListItem>
        <Typography variant="h4">GET Reviews by model</Typography>
        <Typography variant="h6">{}</Typography>
      </S.ApiListItem>
      <S.ApiFuncItem>
        <SyntaxHighlighter language="javascript" style={agate}>
          {RequestGet}
        </SyntaxHighlighter>
      </S.ApiFuncItem>
    </S.MainContainer>
  );
};

export default Apirest;
