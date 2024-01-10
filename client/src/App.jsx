import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import AddPage from "./pages/AddPage"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/add-page" element={<AddPage/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
