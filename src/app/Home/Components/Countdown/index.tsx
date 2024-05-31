import { useState, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'

interface CountdownProps {
  activeCycle: any
  setCycles: any
  activeCycleId: any
}

export function Countdown({
  activeCycle,
  setCycles,
  activeCycleId,
}: CountdownProps) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number | undefined

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, interruptedDate: new Date() }
              } else {
                return cycle
              }
            }),
          )
          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

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
