import data from "./data/module-data.js";
import RootLayout from "./layouts/RootLayout";
import { Routes, Route} from 'react-router-dom';
import { menuItemsFile } from './data/menuItemsFile';
import AppContext from "./data/AppContext";
import { useReducer } from "react";
import AppReducer from "./data/AppReducer";
import EditForm from "./components/EditForm.jsx";
import CreateForm from "./components/CreateForm.jsx";
import Lab4Page from "./pages/Lab4Page.jsx";

function App() {
  
  const [state, appDispatch] = useReducer(AppReducer, data);
  const items = menuItemsFile;
  return (

    <AppContext.Provider value={{items: state, dispatch: appDispatch}}>
      <RootLayout>
        <Routes>
          {items.map((item) => (
                              <Route key={item.id} path={item.urlPattern} element={item.element}/>
                          ))}
          <Route path="*" element={<h1>Page not found!</h1>}/>
          <Route path="/lab4" element={<Lab4Page/>}/>
          <Route path="/lab4/add" element={<CreateForm/>}/>
          <Route path="/lab4/edit" element={<EditForm/>}/>
        </Routes>
      </RootLayout> 
    </AppContext.Provider>
  );
}

export default App;
