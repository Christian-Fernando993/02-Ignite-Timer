'use client'

import { Play } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no minimo 5 minutos.')
    .max(60, 'O intervalo precisa ser no maximo 60 minutos.'),
})

export default function Home() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  console.log(formState.errors)

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <form
        action=""
        className="flex flex-col items-center gap-14"
        onSubmit={handleSubmit(handleCreateNewCycle)}
      >
        <div className="w-full flex items-center justify-center gap-2 text-gray-100 font-bold text-lg flex-wrap">
          <label htmlFor="text">Vou trabalhar em</label>
          <input
            id="text"
            placeholder="Dê um um nome para o seu projeto"
            list="task-suggestions"
            {...register('task')}
            className="bg-transparent h-10 border-0 border-b-2 border-gray-500 font-bold text-lg px-2 text-gray-100 flex-1 placeholder:text-gray-500 focus:shadow-none focus:border-[#00875F] outline-none"
          />
          <datalist id="task-suggestions">
            <option value="Banana"></option>
            <option value="Maça"></option>
            <option value="Uva"></option>
          </datalist>
          <label htmlFor="minutesAmount"></label>
          <input
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
            className="bg-transparent h-10 border-0 border-b-2 border-gray-500 font-bold text-lg px-2 text-gray-100 w-16 focus:shadow-none focus:border-[#00875F] outline-none"
          />

          <span>minutos.</span>
        </div>

        <div className="font-mono text-[10rem] text-gray-100 flex gap-4">
          <span className="bg-gray-700 px-8 py-4 rounded-lg">0</span>
          <span className="bg-gray-700 px-8 py-4 rounded-lg">0</span>
          <span className="text-[#00875F]">:</span>
          <span className="bg-gray-700 px-8 py-4 rounded-lg">0</span>
          <span className="bg-gray-700 px-8 py-4 rounded-lg">0</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="flex justify-center items-center gap-2 p-5 rounded-lg bg-[#00875F] text-gray-100  font-bold cursor-pointer enabled:hover:opacity-70 focus:shodow-none disabled:opacity-70 disabled:cursor-not-allowed transition-all w-full border-0"
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </div>
  )
}
