import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "../axios";
import { AdminAPIKey } from "../config";

import * as S from "./admin.styled";

interface User {
  id: number;
  email: string;
  password: string;
  api_key: string;
}

const Admin: React.FC = () => {
  const [userdata, setUserdata] = useState<User[]>([]);
  const [disabledId, setDisabledId] = useState("");
  const [user, setUser] = useState<User>({
    id: 0,
    email: "",
    password: "",
    api_key: "",
  });
  const [userId, setUserId] = useState(0);
  // const [email, setEmail] = useState("");
  const { email, password, api_key } = user;
  console.log(user);

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({
      ...user,
      [event.target?.name]: event.target?.value,
    });
  };

  const fetchGet = async () => {
    const headers = {
      params: {
        api_key: AdminAPIKey,
      },
    };
    await axios
      .get(`users`, headers)
      .then((response) => {
        setUserdata(response.data.results[0] as User[]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchGet();
  }, []);

  //  useEffect(() => {
  //    userdata? setUser(userdata): "";
  //  }, []);

  const fetchDelete = async (id: number) => {
    const request = {
      params: {
        id: id,
        api_key: AdminAPIKey,
      },
    };
    await axios
      .delete(`delete`, request)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = (id: number) => {
    fetchDelete(id);
  };

  const fetchPut = async (id: string) => {
    const request = {
      params: {
        id: id,
        api_key: AdminAPIKey,
        data: user,
      },
    };
    await axios
      // .put(`update`, request)
      .put(
        `http://localhost:4000/api/update?api_key=${AdminAPIKey}&id=${id.toString()}&data=${user}`
      )
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handlePut = (id: string) => {
    if (disabledId === "") setDisabledId(id);
    else {
      fetchPut(id);
      setDisabledId("");
    }
  };

  const fetchPost = async () => {
    const request = {
      data: user,
      api_key: AdminAPIKey,
    };
    await axios
      .post(`create`, request)
      .then((response) => setUserId(response.data.results))
      .catch((err) => {
        console.error(err);
      });
  };

  const addUser = async () => {
    fetchPost();
  };

  return (
    <S.MainContainer>
      <Typography variant="h3">Admin page</Typography>
      <br />
      <Button variant="contained" onClick={() => addUser()}>
        Add user
      </Button>
      <br />
      <br />
      <S.GridContainer>
        <div>№</div>
        <div>User</div>
        <div>APIKey</div>
        <div>Modifier</div>
        <div>Delete</div>
      </S.GridContainer>
      {userdata.map((item) => (
        <S.GridContainer key={item.id}>
          <div>{item?.id}</div>
          <S.TextFieldContainer>
            <TextField
              variant="standard"
              id={item?.id.toString()}
              type="text"
              fullWidth
              name="email"
              value={email ? email : item?.email}
              disabled={disabledId === item?.id.toString() ? false : true}
              onChange={(e) => onInputChange(e)}
            />
          </S.TextFieldContainer>
          <div>{item?.api_key}</div>
          <div>
            <Button onClick={() => handlePut(item?.id.toString())}>
              Modifier
            </Button>
          </div>
          <div>
            <Button onClick={() => handleDelete(item?.id)}>DELETE</Button>
          </div>
        </S.GridContainer>
      ))}
    </S.MainContainer>
  );
};

export default Admin;
