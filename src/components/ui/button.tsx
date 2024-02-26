import { ReactElement } from "react"

interface ButtonProps {
    title: string
    icon?: ReactElement
}

export function Button({title,icon}: ButtonProps){
    return(
            <button className="flex justify-center font-bold text-[20px] bg-BlueLight text-white w-full p-3 rounded-full">
                {icon}

                <span className="hidden md:block">{title}</span>
            </button>
    )
}