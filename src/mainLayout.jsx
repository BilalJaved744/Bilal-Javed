import { Outlet } from "react-router-dom";
import MainHeader from "./mainComp/mainheader";
// import MainFooter from "./mainComp/mainFooter";

export default function MainLayout(){
  return(
    <>
    <MainHeader/>
    <main>
      <Outlet/>
    </main>
    {/* <MainFooter/> */}
    </>
  )
}