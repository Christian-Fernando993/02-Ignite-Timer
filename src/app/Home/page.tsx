'use client'

import { HandPalm, Play } from '@phosphor-icons/react'

import { useState, useEffect } from 'react'

import { NewCycleForm } from './Components/NewCycleForm'
import { Countdown } from './Components/Countdown'

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export default function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `Timer - ${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <form
        action=""
        className="flex flex-col items-center gap-14"
        onSubmit={handleSubmit(handleCreateNewCycle)}
      >
        <NewCycleForm />
        <Countdown
          activeCycle={activeCycle}
          setCycles={setCycles}
          activeCycleId={activeCycleId}
        />

        {activeCycle ? (
          <button
            type="button"
            onClick={handleInterruptCycle}
            className="flex justify-center items-center gap-2 p-5 rounded-lg bg-red-500 text-gray-100  font-bold cursor-pointer enabled:hover:opacity-70 focus:shodow-none disabled:opacity-70 disabled:cursor-not-allowed transition-all w-full border-0"
          >
            <HandPalm size={24} />
            Interromper
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="flex justify-center items-center gap-2 p-5 rounded-lg bg-[#00875F] text-gray-100  font-bold cursor-pointer enabled:hover:opacity-70 focus:shodow-none disabled:opacity-70 disabled:cursor-not-allowed transition-all w-full border-0"
          >
            <Play size={24} />
            Começar
          </button>
        )}
      </form>
    </div>
  )
}
