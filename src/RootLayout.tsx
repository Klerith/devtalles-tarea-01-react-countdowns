import { Outlet, redirect } from "react-router-dom"
import { Navbar } from "./ui/Navbar"



export const RootLayout = () => {

  redirect('/countdown');

  return (
    <div className="w-screen h-screen">
      <Navbar />
      
      <div className="flex w-full h-[50%] flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
