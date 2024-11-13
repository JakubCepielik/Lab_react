//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import "./App.css";
import RootLayout from "./layouts/RootLayout";
import { Routes, Route} from 'react-router-dom';
import { menuItemsFile } from './data/menuItemsFile';

function App() {
  //const [count, setCount] = useState(0);
  const items = menuItemsFile;
  return (
    <RootLayout>
      <Routes>
        {items.map((item) => (
                            <Route key={item.id} path={item.urlPattern} element={item.element}/>
                        ))}
        <Route path="*" element={<h1>Page not found!</h1>}/>
      </Routes>
    </RootLayout> 
  );
}

export default App;
