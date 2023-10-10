import { MenuItems } from "./menuItems";

type ItemsMap = {
  [key in MenuItems]: string;
};

export const MenuItemsMap: ItemsMap = {
  [MenuItems.APIREST]: "API REST",
  [MenuItems.CONNECTION]: "Connexion",
  [MenuItems.EXAMPLE]: "Exemple",
  [MenuItems.HOME]: "Accueil",
};
