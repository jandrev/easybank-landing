import { createContext, Dispatch, SetStateAction } from "react";

interface MenuContextProps {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContextProps>({
  opened: false,
  setOpened: () => {},
});
