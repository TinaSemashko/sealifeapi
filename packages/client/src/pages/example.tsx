import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "../axios";
import * as S from "./example.styled";
import { useEffect, useState } from "react";



const Example: React.FC = () => {
 
  

  return (
    <S.MainContainer>
      <S.Cont>
        <Typography variant="h2">Page exemple API</Typography>
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
              placeholder="boat"
              inputProps={{ "aria-label": "boat" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </S.Search>
      </S.Cont>
    </S.MainContainer>
  );
};

export default Example;
