import { data } from "./module-data.js";
import HomePage from "../pages/HomePage";
import Lab1Page from "../pages/Lab1Page";
import Lab2Page from "../pages/Lab2Page";
import Lab3Page from "../pages/Lab3Page";
import CreateForm from "../components/CreateForm";
import EditForm from "../components/EditForm";

export const menuItemsFile = [
{
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
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
{
    id: 4,
    label: "Laboratorium 3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3Page/>
},
{
    id: 5,
    label: "Lab 4 - Dodaj",
    url: "/lab4/add",
    urlPattern: "/lab4/add",
    element: <CreateForm/>
},

];