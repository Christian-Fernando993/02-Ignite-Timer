import { useContext } from 'react'
import { CyclesContext } from '../../page'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <div className="w-full flex items-center justify-center gap-2 text-gray-100 font-bold text-lg flex-wrap">
      <label htmlFor="text">Vou trabalhar em</label>
      <input
        id="text"
        placeholder="Dê um um nome para o seu projeto"
        list="task-suggestions"
        {...register('task')}
        disabled={!!activeCycle}
        className="bg-transparent h-10 border-0 border-b-2 border-gray-500 font-bold text-lg px-2 text-gray-100 flex-1 placeholder:text-gray-500 focus:shadow-none focus:border-[#00875F] outline-none"
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1"></option>
        <option value="Projeto 2"></option>
        <option value="Projeto 3"></option>
      </datalist>
      <label htmlFor="minutesAmount"></label>
      <input
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
        className="bg-transparent h-10 border-0 border-b-2 border-gray-500 font-bold text-lg px-2 text-gray-100 w-16 focus:shadow-none focus:border-[#00875F] outline-none"
      />

      <span>minutos.</span>
    </div>
  )
}
