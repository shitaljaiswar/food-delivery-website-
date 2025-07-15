import { RiGalleryView2 } from "react-icons/ri";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { GiNoodles } from "react-icons/gi";
import { BsCake2Fill } from "react-icons/bs";
import { GiHamburger } from "react-icons/gi";
import { CiPizza } from "react-icons/ci";
import { LuIceCreamBowl } from "react-icons/lu";


const Categories = [
  {
    id: 1,
    name: "All",
    icon: <RiGalleryView2 className="size-10 text-orange-500" />,
  },
  {
    id: 2,
    name: "Breakfast",
    icon: <MdOutlineFreeBreakfast className="size-10 text-orange-500" />,
  },
  {
    id: 3,
    name: "Soups",
    icon: <LuSoup className="size-10 text-orange-500" />,
  },
  {
    id: 4,
    name: "Pasta",
    icon: <GiNoodles className="size-10 text-orange-500" />,
  },
  {
    id: 5,
    name: "Cake",
    icon: <BsCake2Fill className="size-10 text-orange-500" />,
  },
  {
    id: 6,
    name: "Burger",
    icon: <GiHamburger className="size-10 text-orange-500" />,
  },
  {
    id: 7,
    name: "Pizza",
    icon: <CiPizza className="size-10 text-orange-500" />,
  },
  {
    id: 8,
    name: "Desserts",
    icon: <LuIceCreamBowl className="size-10 text-orange-500" />,
  },
];

export default Categories;
