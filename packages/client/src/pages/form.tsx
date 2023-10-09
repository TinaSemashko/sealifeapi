import React, { useState, useEffect } from "react";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl, FormGroup } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Validate, ValidationGroup } from "mui-validate";
import axios from "../axios";
import { useSnackbar } from "notistack";

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
  const [dataUrl, setDataUrl] = useState("");
  const userIdCourant = localStorage.getItem("usrCourant");

  const [validationEmail, setValidationEmail] = useState({
    valid: false,
    messages: [],
    display: false,
  });

  const [isInscrit, setIsInscrit] = useState(
    userIdCourant !== "" && userIdCourant !== undefined
  );
  const [userEmail, setUserEmail] = useState("");

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [userdata, setUserdata] = useState<User>(); //information bd
  const [user, setUser] = useState({
    email: "",
    password: "",
  }); // information form

  const { email, password } = user;

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({
      ...user,
      [event.target?.name]: event.target?.value,
    });
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

  const getUser = async () => {
    if (isInscrit) {
      localStorage.setItem("usrCourant", "");

      setDataUrl("");
      setIsInscrit(false);
    } else {
      console.log(validationEmail.valid);
      if (validationEmail.valid) fetchGet();
      else
        enqueueSnackbar("Corrigez les erreurs dans le formulaire", {
          variant: "error",
        });
    }
  };

  useEffect(() => {
    if (userdata) {
      setUserEmail(userdata.email);
      localStorage.setItem("usrCourant", userdata.id.toString());
      localStorage.setItem("usrCourantPrenom", userdata.email);
      setIsInscrit(true);
      //   setDataUrl(`data:image/jpeg;base64,${userdata.photo.slice(20)}`);
    }
  }, [userdata]);

  const fetchGetUserById = async () => {
    const request = {
      params: {
        id: userIdCourant,
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
      <Box sx={{ width: "70%" }}>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid xs={12} md={6}>
            <S.Item>
              <ValidationGroup>
                <>
                  <S.FormContainer>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": {
                          m: 1,
                          width: { sm: "30vw", md: "25vw", lg: "15vw" },
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
                                width: { sm: "30vw", md: "25vw", lg: "15vw" },
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
                                width: { sm: "30vw", md: "25vw", lg: "15vw" },
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
                                      sm: "30vw",
                                      md: "25vw",
                                      lg: "15vw",
                                    },
                                  }}
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <FormGroup>
                                        {/* <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                        >
                                          {showPassword ? (
                                            <VisibilityOff />
                                          ) : (
                                            <Visibility />
                                          )}
                                        </IconButton> */}
                                      </FormGroup>
                                    </InputAdornment>
                                  }
                                  label="Password"
                                />
                              </FormGroup>
                            </FormControl>
                          </Box>
                        </S.InputContainer>

                        <S.ButtonLogin
                          isinscrit={isInscrit}
                          variant="contained"
                          size="medium"
                          onClick={() => getUser()}
                        >
                          {isInscrit ? "LOG OUT" : "LOG IN"}
                        </S.ButtonLogin>
                      </S.FlexContainer>
                    </Box>
                  </S.FormContainer>
                </>
              </ValidationGroup>
            </S.Item>
          </Grid>
        </Grid>
      </Box>
    </S.CContainer>
  );
};

export default FormConnexion;
