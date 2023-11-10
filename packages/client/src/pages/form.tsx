import React, { useState, useEffect, useContext } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl, FormGroup } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Validate, ValidationGroup } from "mui-validate";
import axios from "../axios";
import { useSnackbar } from "notistack";
import { AdminAPIKey } from "../config";
import Spinner from "../shared/spinner/spinner";

import * as S from "../pages/form.styled";

interface User {
  id: number;
  api_key: number;
  email: string;
  password: string;
}

const FormConnexion: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const userIdCourant = localStorage.getItem("usrCourant");
  const [newUserId, setNewUserId] = useState(0);
  const [validationEmail, setValidationEmail] = useState({
    valid: false,
    messages: [],
    display: false,
  });
  const [userAPIKey, setUserAPIKey] = useState("");
  const isAdmin = userAPIKey === AdminAPIKey;
  const [isLoading, setisLoadind] = useState(false);

  const [isInscrit, setIsInscrit] = useState(
    userIdCourant !== undefined && userIdCourant !== ""
  );

  const refreshPage = () => {
    window.location.reload();
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [userdata, setUserdata] = useState<User>(); //information bd
  const [user, setUser] = useState({
    email: "",
    password: "",
    api_key: "",
  }); // information form

  const { email, password, api_key } = user;

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({
      ...user,
      [event.target?.name]: event.target?.value,
    });
  };

  const genAPIKey = () => {
    //create a base-36 string that contains 30 chars in a-z,0-9
    return [...Array(30)]
      .map((e) => ((Math.random() * 36) | 0).toString(36))
      .join("");
  };

  const showError = (error: Error) => {
    enqueueSnackbar("Utilisateur inconnu", {
      variant: "error",
    });
    console.error(error);
  };

  const fetchGet = async () => {
    const request = {
      params: {
        email: user.email,
        password: user.password,
        api_key: userAPIKey,
      },
    };
    await axios
      .get(`user`, request)
      .then((response) => {
        setUserdata(response.data.results[0]);
      })
      .catch((err) => {
        showError(err);
      });
  };

  useEffect(() => {
    if (userdata) {
      setIsInscrit(true);
      setUserAPIKey(userdata.api_key.toString());
      localStorage.setItem("usrCourant", userdata.id.toString());
    }
  }, [userdata]);

  const getUser = async () => {
    if (isInscrit) {
      localStorage.setItem("usrCourant", "");
      setIsInscrit(false);
      refreshPage();
    } else {
      if (validationEmail.valid) {
        setisLoadind(true);
        setTimeout(() => {
          fetchGet();
          setisLoadind(false);
        }, 2000);
      } else
        enqueueSnackbar("Corrigez les erreurs dans le formulaire", {
          variant: "error",
        });
    }
  };

  const fetchPost = async () => {
    const params = {
      data: user,
    };
    await axios
      .post("create", params)
      .then((response) => setNewUserId(response.data.results))
      .catch((err) => {
        showError(err);
      });
  };

  const createUser = () => {
    const APIKey = genAPIKey();
    setUser({
      ...user,
      api_key: APIKey,
    });
    if (validationEmail.valid && user.password && user.api_key) {
      fetchPost();
    } else
      enqueueSnackbar("Corrigez les erreurs dans le formulaire", {
        variant: "error",
      });
  };

  useEffect(() => {
    if (newUserId) {
      enqueueSnackbar("L'utilisateur est créé avec succès", {
        variant: "success",
      });
    }
  }, [newUserId]);

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
        setUserdata(response.data.results[0]);
      })
      .catch((err) => {
        showError(err);
      });
  };

  useEffect(() => {
    if (isInscrit && !userdata) {
      fetchGetUserById();
    }
  }, [userIdCourant]);

  return (
    <S.CContainer>
      <Typography variant="h2">Connexion</Typography>
      <Box
        sx={{ width: "70%", height: "50vh", marginLeft: "14vw" }}
        border={4}
        borderRadius={3}
      >
        <ValidationGroup>
          <>
            <S.FormContainer>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: { sm: "100vw", md: "50vw", lg: "25vw" },
                    borderRadius: "10px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <S.FlexContainer>
                  <S.InputContainer isinscrit={isInscrit}>
                    <Validate
                      name="email"
                      regex={[
                        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        "Votre email n'est pas valide",
                      ]}
                      after={(result: any) => setValidationEmail(result)}
                    >
                      <TextField
                        required
                        id="Email"
                        label="Email"
                        name="email"
                        value={email}
                        placeholder="Entrez votre Email"
                        color="secondary"
                        fullWidth
                        onChange={(event) => onInputChange(event)}
                        sx={{
                          backgroundColor: " grey",
                          boxShadow: " 0px 8px 8px #566573  inset",
                          width: { sm: "100vw", md: "50vw", lg: "25vw" },
                        }}
                      />
                    </Validate>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      <FormControl
                        sx={{
                          m: 1,
                          width: { sm: "100vw", md: "50vw", lg: "25vw" },
                          borderRadius: "10px",
                        }}
                        variant="outlined"
                      >
                        <FormGroup>
                          <InputLabel
                            htmlFor="outlined-adornment-password"
                            color="secondary"
                          >
                            Mot de passe
                          </InputLabel>
                        </FormGroup>
                        <FormGroup>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            color="secondary"
                            fullWidth
                            autoComplete="new-password"
                            name="password"
                            value={password}
                            onChange={(event) => onInputChange(event)}
                            sx={{
                              backgroundColor: " grey",
                              boxShadow: " 0px 8px 8px #566573  inset",
                              borderRadius: "10px",
                              width: {
                                sm: "100vw",
                                md: "50vw",
                                lg: "25vw",
                              },
                            }}
                            endAdornment={
                              <InputAdornment position="end">
                                <FormGroup>
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                  >
                                    {showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </FormGroup>
                              </InputAdornment>
                            }
                            label="Password"
                          />
                        </FormGroup>
                      </FormControl>
                    </Box>
                  </S.InputContainer>
                  {!isLoading ? (
                    <S.UserData isinscrit={isInscrit}>
                      USER: {userdata?.email}
                      <br />
                      {isAdmin ? "" : `API-KEY: ${userdata?.api_key}`}
                    </S.UserData>
                  ) : (
                    <Spinner />
                  )}

                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                    sx={{
                      paddingTop: "10vh",
                    }}
                  >
                    <S.ButtonLogin
                      isinscrit={isInscrit}
                      variant="contained"
                      size="medium"
                      sx={{
                        marginLeft: "-6vh",
                      }}
                      onClick={() => getUser()}
                    >
                      {isInscrit ? "LOG OUT" : "LOG IN"}
                    </S.ButtonLogin>
                    <S.ButtonLogin
                      isinscrit={isInscrit}
                      variant="contained"
                      size="medium"
                      onClick={() => createUser()}
                    >
                      Sign UP
                    </S.ButtonLogin>
                  </ButtonGroup>
                </S.FlexContainer>
              </Box>
            </S.FormContainer>
          </>
        </ValidationGroup>
      </Box>
    </S.CContainer>
  );
};

export default FormConnexion;
