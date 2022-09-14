import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  setCurentCycleAsFinishedAction,
} from '../reducers/cycles/actions'

import { cyclesReducer } from '../reducers/cycles/reducer'

import { Cycle } from '../reducers/cycles/types.d'

interface CreateNewCycleData {
  task: string
  durationInMinutes: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  setCurentCycleAsFinished: () => void
  interruptCurrentCycle: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateNewCycleData) => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CycleContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: '',
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer: cyclesState',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        cycles: [],
        activeCycleId: '',
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer: cyclesState', stateJSON)
  }, [cyclesState])

  const setCurentCycleAsFinished = useCallback(() => {
    dispatch(setCurentCycleAsFinishedAction())
  }, [])

  const interruptCurrentCycle = useCallback(() => {
    dispatch(interruptCurrentCycleAction())

    setAmountSecondsPassed(0)
  }, [])

  const createNewCycle = useCallback(
    ({ task, durationInMinutes }: CreateNewCycleData) => {
      const newCycle: Cycle = {
        id: String(new Date().getTime()),
        task,
        durationInMinutes,
        startDate: new Date(),
      }

      dispatch(addNewCycleAction(newCycle))

      setAmountSecondsPassed(0)
    },
    [],
  )

  const setSecondsPassed = useCallback((seconds: number) => {
    setAmountSecondsPassed(seconds)
  }, [])

  const contextValue = useMemo(
    () => ({
      cycles,
      activeCycle,
      setCurentCycleAsFinished,
      amountSecondsPassed,
      setSecondsPassed,
      interruptCurrentCycle,
      createNewCycle,
    }),
    [
      cycles,
      activeCycle,
      setCurentCycleAsFinished,
      amountSecondsPassed,
      setSecondsPassed,
      interruptCurrentCycle,
      createNewCycle,
    ],
  )

  return (
    <CyclesContext.Provider value={contextValue}>
      {children}
    </CyclesContext.Provider>
  )
}
