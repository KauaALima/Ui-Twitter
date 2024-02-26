import { Sidebar } from "../components/sidebar";
import { Outlet } from "react-router-dom";

export function Default(){
    return(
        <div className="flex flex-row max-w-[1100px] my-0 mx-auto">

        <Sidebar />
        
        <Outlet />
      </div>
    )
}