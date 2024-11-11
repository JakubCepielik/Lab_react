//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import "./App.css";
import { data } from "./data/module-data";
import RootLayout from "./layouts/RootLayout";
import { Routes, Route, Outlet} from 'react-router-dom';
import Lab1Page from "./pages/Lab1Page";


function App() {
  //const [count, setCount] = useState(0);

  return (
    <RootLayout>
      <Routes>
        <Route path="/home" element={<h1>Jakub Cepielik</h1>}/>
        <Route path="/lab1" element={<Lab1Page name = {data}/>}/>
        <Route path="/lab2" element={<Outlet/>}>
            <Route path="people" element={<h1>People</h1>}></Route>
        </Route>
        <Route path="*" element={<h1>Page not found!</h1>}/>
      </Routes>
    </RootLayout> 
  );
}

export default App;
