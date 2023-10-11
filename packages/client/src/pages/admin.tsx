import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import axios from "../axios";
import { AdminAPIKey } from "../config";
import { useNavigate } from "react-router";
import { Routes } from "../app/routes";

import * as S from "./admin.styled";

interface User {
  id: number;
  email: string;
  password: string;
  api_key: string;
}

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [userdata, setUserdata] = useState<User[]>([]);
  const [disabledId, setDisabledId] = useState("");
  const [editedData, setEditedData] = useState<{
    [key: string]: { email: string; api_key: string };
  }>({});
  const [user, setUser] = useState<User>({
    id: 0,
    email: "",
    password: "",
    api_key: "",
  });
  const [userId, setUserId] = useState(0);

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    itemId: number
  ) => {
    setUser({
      ...user,
      [event.target?.name]: event.target?.value,
    });

    setEditedData((prevData) => ({
      ...prevData,
      [itemId]: {
        ...prevData[itemId],
        [event.target?.name]: event.target?.value,
      },
    }));
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
    const params = {
      data: user,
    };
    const headers = {
      params: {
        id: id,
        api_key: AdminAPIKey,
      },
    };
    await axios
      .put("update", params, headers)
      .then((response) => setUserId(response.data.results[0].id))
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (userId)
      enqueueSnackbar("L'utilisateur est modifié avec succès", {
        variant: "success",
      });
  }, [userId]);

  const handlePut = (id: string) => {
    if (disabledId === "") setDisabledId(id);
    else {
      if (editedData.lenght) {
        setUser({
          ...user,
          email: editedData[id].email,
          api_key: editedData[id].api_key,
        });
        fetchPut(id);
      } else
        enqueueSnackbar("Aucun changement effectué", {
          variant: "info",
        });
      setDisabledId("");
    }
  };

  const addUser = async () => {
    navigate(Routes.form);
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
              type="text"
              fullWidth
              name="email"
              value={editedData[item.id]?.email || item?.email}
              disabled={disabledId === item?.id.toString() ? false : true}
              onChange={(e) => onInputChange(e, item?.id)}
            />
          </S.TextFieldContainer>
          <S.TextFieldContainer>
            {item?.api_key === AdminAPIKey ? (
              ""
            ) : (
              <TextField
                variant="standard"
                type="text"
                fullWidth
                name="api_key"
                value={editedData[item.id]?.api_key || item?.api_key}
                disabled={disabledId === item?.id.toString() ? false : true}
                onChange={(e) => onInputChange(e, item?.id)}
              />
            )}
          </S.TextFieldContainer>

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
