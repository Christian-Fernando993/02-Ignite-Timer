import { differenceInSeconds } from 'date-fns'
import { useEffect, useContext } from 'react'
import { CyclesContext } from '../../page'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCyclesAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number | null

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCyclesAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCyclesAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `Timer - ${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <div className="font-mono text-[10rem] text-gray-100 flex gap-4">
      <span className="bg-gray-700 px-8 py-4 rounded-lg">{minutes[0]}</span>
      <span className="bg-gray-700 px-8 py-4 rounded-lg">{minutes[1]}</span>
      <span className="text-[#00875F]">:</span>
      <span className="bg-gray-700 px-8 py-4 rounded-lg">{seconds[0]}</span>
      <span className="bg-gray-700 px-8 py-4 rounded-lg">{seconds[1]}</span>
    </div>
  )
}
