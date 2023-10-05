import { useState } from "react";
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

import { useLocation, useNavigate } from "react-router";
import { Routes } from "../../app/routes";

import CloseIcon from "@mui/icons-material/Close";

import * as S from "./topbar.styled";
import { MenuItems } from "../../constants/menuItems";

const menuItemsArray = Object.values(MenuItems);

const drawerWidth = "100%";

const TopBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSelected = (item: string): boolean => pathname.includes(item);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "lightGreen.main",
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
        TEST
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
        backgroundColor:
          pathname === Routes.profil ? "primary.main" : "transparent",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        position="absolute"
        sx={{
          backgroundColor:
            pathname === Routes.profil ? "primary.main" : "transparent",
          boxShadow: "none",
        }}
      >
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
            TEST
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
                    "&.Mui-selected": {
                      color:
                        item === MenuItems.INSCRIPTION
                          ? "colorWhite.main"
                          : "secondary.main",
                      backgroundColor:
                        item === MenuItems.INSCRIPTION
                          ? "secondary.main"
                          : "transparent",
                      borderRadius:
                        item === MenuItems.INSCRIPTION ? "10px" : "0",
                      boxShadow:
                        item === MenuItems.INSCRIPTION
                          ? " 0px 4px 4px #2e4f44 "
                          : "transparent",
                    },
                  }}
                >
                  {item === MenuItems.HOME ? "accueil" : item}
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
