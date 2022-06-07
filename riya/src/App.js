
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "./components/Admin/Welcome";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path=""element={<Welcome/>}/>
     
      </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
