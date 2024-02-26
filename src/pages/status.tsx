import { FormEvent, useState, KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { Header } from "../components/header";
import { Tweet } from "../components/tweet";
import { Separator } from "../components/ui/separator";

export function Status(){
    const [newAnswer, setNewAnswer] = useState('')

  const [answer, setAnswer] = useState([
    'Primeria resposta',
    'isso mesmo',
    'teste'
  ])

  function createNewAnswer(event: FormEvent){
    event.preventDefault()

    setAnswer([newAnswer, ...answer])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswer([newAnswer, ...answer])
      setNewAnswer('')
    }
  }

  return(
    <main className="flex flex-col flex-1">
      <Header title='Tweet' />

      <Tweet text='Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: ✅ npm start: De 32s para 400ms (sim, demorava 30s) ✅ npm build: De 120s para 22s Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥'/>

      <Separator />

      <form onKeyDown={handleHotKeySubmit} onSubmit={createNewAnswer} className='flex flex-col gap-2 px-6 py-5 border-b border-r border-b-BorderLight  dark:border-BorderDarck'>
        <div className='flex items-center gap-3'>
          <img className='size-14 rounded-full' src="https://github.com/LKaua22k.png" alt="IUser img" />
          <textarea 
            className='flex-1 mt-6 outline-none resize-none border-none text-xl font-semibold bg-transparent placeholder:text-PlaceHolderColor' 
            placeholder='Whats happening?' 
            value={newAnswer}
            onChange={(event) => setNewAnswer(event.target.value)}
          />
        </div>

        <button className="inline-flex w-fit ml-auto font-bold text-base bg-BlueLight text-white px-6 py-4 rounded-full">
          <Send className="md:hidden"/>
          <span className="hidden md:block">Tweet</span>
        </button>
      </form>
      

      {
        answer.map((answer) => {
          return(
            <Tweet key={answer} text={answer}/>
          )
        })
      }
    </main>
  )
}