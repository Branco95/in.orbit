import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/lets-start-illustration.svg'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center  gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="Let's start" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        You still have not created a goal, <br /> let's start by creating your
        first one.
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Create Goal
        </Button>
      </DialogTrigger>
    </div>
  )
}
