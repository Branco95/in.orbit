import { X } from 'lucide-react'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'
import { Button } from './ui/button'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createGoal } from '../http/create-goal'
import { useQueryClient } from '@tanstack/react-query'

const createGoalForm = z.object({
  title: z.string().min(1, 'Activity is required'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type CreateGoalForm = z.infer<typeof createGoalForm> // { title: string, desiredWeeklyFrequency: number }

export function CreateGoal() {
  const queryClient = useQueryClient()
  const { register, control, handleSubmit, formState, reset } =
    useForm<CreateGoalForm>({
      resolver: zodResolver(createGoalForm),
    })

  async function handleCreateGoal(data: CreateGoalForm) {
    await createGoal({
      title: data.title,
      desiredWeeklyFrequency: data.desiredWeeklyFrequency,
    })

    queryClient.invalidateQueries({ queryKey: ['summary'] }) // usefull for updating the summary component
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })

    reset()
  }

  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle> Create goal </DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Add activities for <u>your good habits</u> and to practice them all
            week.
          </DialogDescription>
        </div>

        <form
          action=""
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex-1 flex flex-col justify-between "
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">What's the activity ?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Doing exercices, study, etc..."
                {...register('title')} // this can only be used in a html input element
              />
              {formState.errors.title && (
                <span className="text-red-500 text-sm">
                  {formState.errors.title.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">How many times in the week?</Label>
              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                defaultValue={7}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={String(field.value)}
                    >
                      <RadioGroupItem value="1">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          1x a week
                        </span>
                        <span className="lext-lg leading-none">🥱</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="2">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          2x a week
                        </span>
                        <span className="lext-lg leading-none">🙂</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="3">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          3x a week
                        </span>
                        <span className="lext-lg leading-none">😎</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="4">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          4x a week
                        </span>
                        <span className="lext-lg leading-none">😜</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="5">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          5x a week
                        </span>
                        <span className="lext-lg leading-none">🤨</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="6">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          6x a week
                        </span>
                        <span className="lext-lg leading-none">🤯</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="7">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          Every day of the week
                        </span>
                        <span className="lext-lg leading-none">🔥</span>
                      </RadioGroupItem>
                    </RadioGroup>
                  )
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button className="flex-1" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button className="flex-1" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
