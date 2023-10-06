import { Typography } from "@mui/material";
import axios from "../axios";
import * as S from "./example.styled";
import { useEffect, useState } from "react";

interface User {
  id: number;
  email: string;
  password: string;
  api_key: string;
}

const Example: React.FC = () => {
  const [userdata, setUserdata] = useState<User>();

  const fetchGet = async () => {
    const request = {
      params: {
        id: "1",
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
      <S.Cont>
        <Typography variant="h2">Page Example</Typography>
        <Typography variant="h4">
          <div>{userdata?.id}</div>
          <div> {userdata?.email}</div>
          <div> {userdata?.password}</div>
          <div> {userdata?.api_key}</div>
        </Typography>
      </S.Cont>
    </S.MainContainer>
  );
};

export default Example;
