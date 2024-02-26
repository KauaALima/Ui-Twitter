import {Home,Hash,Bell,Mail,Bookmark,FileText,User,MessageCircleMore,PencilLine} from 'lucide-react'
import Logo from '../assets/Logo.png'
import { Link } from '../components/ui/navlink'
import { Button } from '../components/ui/button'

export function Sidebar(){
    return(
        <aside className="w-20 space-y-8 px-6 py-5 border-r border-r-BorderLight dark:border-BorderDarck md:w-80" >
            <img src={Logo} alt="Logo twitter" className='w-8' />

            <nav className='flex flex-col gap-9'>
            
            <Link icon={<Home />} link="/" text='Home'/>

            <Link icon={<Bell />}  text='Notifications'/>

            <Link icon={<Hash />} text='Explore'/>

            <Link icon={<Mail />} text='Messages'/>

            <Link icon={<Bookmark />} text='Bookmarks'/>

            <Link icon={<FileText />} text='List'/>

            <Link icon={<User />} text='Profile'/>

            <Link icon={<MessageCircleMore />} text='More'/>
            </nav>

            <Button icon={<PencilLine className='md:hidden'/>} title='Tweet'/>
      </aside>
    )
}