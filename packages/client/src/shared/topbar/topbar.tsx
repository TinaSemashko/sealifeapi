import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  ListItemButton,
  Typography,
} from "@mui/material";
import { MenuItems } from "../../constants/menuItems";
import { MenuItemsMap } from "../../constants/menuitemsobjet";
import { useLocation, useNavigate } from "react-router";
import { Routes } from "../../app/routes";
import CloseIcon from "@mui/icons-material/Close";
import axios from "../../axios";
import { AdminAPIKey } from "../../config";

import * as S from "./topbar.styled";

const menuItemsArray = Object.values(MenuItems);

const drawerWidth = "100%";

const TopBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userIdCourant = localStorage.getItem("usrCourant");
  const isSelected = (item: string): boolean => pathname.includes(item);
  const [userAPIKey, setUserAPIKey] = useState("");
  const isAdmin = userAPIKey === AdminAPIKey;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const fetchGetUserById = async () => {
    const request = {
      params: {
        id: userIdCourant,
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
    if (userIdCourant !== undefined && userIdCourant !== "" && !userAPIKey) {
      fetchGetUserById();
    }
  }, [userIdCourant]);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "primary.main",
        height: "100%",
      }}
    >
      <S.CloseIconStyle>
        <Typography variant="h6" color="colorWhite.main" className="close">
          Close
        </Typography>
        <CloseIcon sx={{ fontSize: "2rem" }} />
      </S.CloseIconStyle>

      <Typography
        variant="h3"
        fontSize="13vw"
        sx={{ my: 2, color: "secondary.main" }}
      >
        SEALIFEAPI
      </Typography>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {menuItemsArray.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              selected={isSelected(item)}
              sx={{
                textAlign: "center",
                color: "colorWhite.main",
              }}
            >
              <ListItemText
                primary={item === MenuItems.HOME ? "accueil" : item}
                onClick={() => navigate(Routes[item as keyof typeof Routes])}
                primaryTypographyProps={{
                  fontSize: "12vw",
                  textTransform: "capitalize",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar component="nav" position="absolute">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "end",
            width: "100%",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            color="secondary.main"
            onClick={() => navigate(Routes.home)}
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            SEALIFEAPI
          </Typography>
          <List sx={{ display: { xs: "none", sm: "flex" } }}>
            {menuItemsArray.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  selected={isSelected(item)}
                  onClick={() => navigate(Routes[item as keyof typeof Routes])}
                  sx={{
                    color: "colorWhite.main",
                    textTransform: "capitalize",
                    display:
                      (isAdmin && MenuItemsMap[item] === MenuItemsMap.admin) ||
                      MenuItemsMap[item] !== MenuItemsMap.admin
                        ? "block"
                        : "none",
                    "&.Mui-selected": {
                      color: "colorWhite.main",
                      backgroundColor: "secondary.main",
                      boxShadow: " 0px 4px 4px #2e4f44 ",
                    },
                  }}
                >
                  {MenuItemsMap[item]}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default TopBar;
