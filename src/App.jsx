import data from "./data/module-data.js";
import RootLayout from "./layouts/RootLayout";
import { Routes, Route} from 'react-router-dom';
import { menuItemsFile } from './data/menuItemsFile';
import AppContext from "./data/AppContext";
import { useReducer } from "react";
import AppReducer from "./data/AppReducer";
import EditForm from "./components/EditForm.jsx";

function App() {
  
  const [state, appDispatch] = useReducer(AppReducer, data);
  const menuitems = menuItemsFile;
  return (

    <AppContext.Provider value={{items: state, dispatch: appDispatch}}>
      <RootLayout>
        <Routes>
          {menuitems.map((item) => (
                              <Route key={item.id} path={item.urlPattern} element={item.element}/>
                          ))}
          <Route path="lab4/edit/:id" element={<EditForm/>}/>
          <Route path="*" element={<h1>Page not found!</h1>}/>
        </Routes>
      </RootLayout> 
    </AppContext.Provider>
  );
}

export default App;
