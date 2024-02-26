import { useState, FormEvent, KeyboardEvent } from "react";
import { Header } from "../components/header";
import { Tweet } from "../components/tweet";
import { Separator } from "../components/ui/separator";
import {Sparkles} from 'lucide-react'



export function Timeline(){
  const [newTweet, setNewTweet] = useState('')

  const [tweets,setTweets] = useState([
    'Meu primeiro Tweet',
    'Teste',
    'Deu certo o tweet'
  ])

  function creteNewTweet(event: FormEvent){
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }


  return(
    <main className="flex flex-col flex-1">
      <Header title='Home' icon={<Sparkles className='text-BlueLight'/>}/>

      <form onKeyDown={handleHotKeySubmit} onSubmit={creteNewTweet} className='flex flex-col gap-2 px-6 py-5 border-r border-b-BorderLight dark:border-BorderDarck'>
        <div className='flex items-center gap-3'>
          <img className='size-14 rounded-full' src="https://github.com/LKaua22k.png" alt="IUser img" />
          <textarea 
            className='flex-1 mt-6 outline-none resize-none border-none text-xl font-semibold bg-transparent placeholder:text-PlaceHolderColor dark:text-white'
            placeholder='Whats happening?'
            value={newTweet} 
            onChange={event => setNewTweet(event.target.value)}
          />
        </div>

        <button className="inline-flex w-fit ml-auto font-bold text-base bg-BlueLight text-white px-6 py-4 rounded-full">Tweet</button>
      </form>
      
      <Separator />

      {tweets.map(tweet => {
        return(
          <Tweet key={tweet} text={tweet} />
        )
      })}

    </main>
  )
}