import {MessageCircle,RefreshCcw,Heart} from 'lucide-react'
import { Link } from 'react-router-dom'

interface TweetProps {
    text: string
}

export function Tweet({text}: TweetProps){
    return(

      <Link to='/status' className='flex gap-3 px-5 py-6 border-b border-r border-b-BorderLight  dark:border-BorderDarck'>
          <img className='size-14 rounded-full' src="https://github.com/LKaua22k.png" alt=""/>

          <div className='flex flex-col gap-2 items-baseline'>
            <div className='flex gap-1 items-center justify-center'>
              <strong className='text-[16px] font-bold text-TitleColor dark:text-white'>Kauã Araujo</strong>
              <span className='text-[14px] font-medium text-SubTitleColor'>@Kaua22k</span>
            </div>

            <p className='h-auto'>{text}</p>

            <div className='flex gap-3 items-center justify-center'>
              <button className='flex gap-2 items-center justify-center text-SubTitleColor'>
                <MessageCircle />
                20
              </button>

              <button className='flex gap-2 items-center justify-center text-SubTitleColor'>
                <RefreshCcw />
                20
              </button>

              <button className='flex gap-2 items-center justify-center text-SubTitleColor'>
                <Heart />
                20
              </button>
            </div>

          </div>
      </Link>        
    )
}