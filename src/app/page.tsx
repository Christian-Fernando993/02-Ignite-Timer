'use client'

import { Play } from '@phosphor-icons/react'

export default function Home() {
  return (
    <div className="h-full flex-1">
      <form action="">
        <div className="">
          <label htmlFor="text">Vou trabalhar em</label>
          <input id="text" />

          <label htmlFor="minutesAmount"></label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </div>

        <div className="">
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <button type="submit" className="">
          <Play size={24} />
          Começar
        </button>
      </form>
    </div>
  )
}
