import { data } from "./module-data.js";
import HomePage from "../pages/HomePage";
import Lab1Page from "../pages/Lab1Page";
import Lab2Page from "../pages/Lab2Page";

export const menuItemsFile = [
{
    id: 1,
    label: "Home",
    url: "/home",
    urlPattern: "/home",
    element: <HomePage/>
},
{
    id: 2,
    label: "Laboratorium 1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1Page name = {data}/>
},
{
    id: 3,
    label: "Laboratorium 2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2Page/>
},
];