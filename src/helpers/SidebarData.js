import {FaBoxes, FaRegListAlt} from "react-icons/fa";
const iconSize= 23
export const SidebarData = [
  {
    title: "Collections",
    icon: <FaBoxes size={iconSize}/>,
    link: "/home/collections"
  },
  {
    title: "Define Materials",
    icon: <FaRegListAlt size={iconSize}/>,
    link: "/home/materials"
  }
];