import PortSec from "../site/portsec";
import About from "./About";
import Services from "./Service";
import Portfolio from "./portfolio";
import Contact from "./contact";

export default function Home(){
  return(
    <>
  <PortSec/>
  <About/>
  <Services/>
  <Portfolio/>
  <Contact/>
    </>
  )
}