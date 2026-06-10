import { Outlet, } from "react-router";
import { Header, } from "../components";


function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header/>
      <main className="min-w-0 flex flex-1 flex-col">
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
