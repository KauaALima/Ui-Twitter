import { ReactElement } from 'react'

interface HeaderProps {
    title: string
    icon?: ReactElement
}

export function Header({title,icon}: HeaderProps){
    return(
        <header className='flex text-xl font-bold w-full justify-between px-6 py-5 border-b border-r border-b-BorderLight dark:border-BorderDarck'>
            {title}
            {icon}
        </header>
    )
}