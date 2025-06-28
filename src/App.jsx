import { Route, Routes } from "react-router-dom";
import MainLayout from "./mainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/contact";
import PortFolio from "./Pages/portfolio";
import Service from "./Pages/Service";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="about" element={<About/>}/>
          <Route path="service" element={<Service/>}/>
          <Route path="portfolio" element={<PortFolio/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}