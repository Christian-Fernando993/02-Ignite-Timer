'use client'

import { Play } from '@phosphor-icons/react'

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <form action="" className="flex flex-col items-center gap-14">
        <div className="w-full flex items-center justify-center gap-2 text-gray-100 font-bold text-lg flex-wrap">
          <label htmlFor="text">Vou trabalhar em</label>
          <input id="text" />

          <label htmlFor="minutesAmount"></label>
          <input type="number" id="minutesAmount" />

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
          className="w-full border-0 p-4 rounded-lg flex items-center justify-center gap-2 font-bold cursor-pointer bg-[#00875F] text-gray-100 transition-all hover:bg-[#015F43] disabled:opacity-70 disabled:cursor-not-allowed hover:disabled:opacity-70"
          disabled
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </div>
  )
}

//
