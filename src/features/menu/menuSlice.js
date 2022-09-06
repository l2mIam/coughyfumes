import { MENU } from "../../app/shared/MENU"

export const selectAllMenuItems = () => {
  return MENU
}

export const selectFeaturedMenuItem = () => {
  return MENU.find(item => item.featured)
}