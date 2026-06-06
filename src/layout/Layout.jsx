import { Route, Outlet, } from "react-router";
import { Header } from "../components";


function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default Layout