import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

interface NavLinkProps {
    icon: ReactNode
    text: string
    link?: string | undefined 
}

export function Link({icon,text,link}: NavLinkProps){
    return(
        <NavLink to={link} className="inline-flex w-fit gap-5 items-center hover:text-BlueLight">
            {icon}
            <span className="hidden font-bold text-xl md:block">{text}</span>
        </NavLink>
    )
}