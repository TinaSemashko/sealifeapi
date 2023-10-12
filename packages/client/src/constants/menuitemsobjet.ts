import { MenuItems } from "./menuItems";

type ItemsMap = {
  [key in MenuItems]: string;
};

export const MenuItemsMap: ItemsMap = {
  [MenuItems.APIREST]: "API REST",
  [MenuItems.CONNECTION]: "Connexion",
  [MenuItems.HOME]: "Accueil",
  [MenuItems.ADMIN]: "Admin page",
};
