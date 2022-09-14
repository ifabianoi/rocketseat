import { useContext } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import { CyclesContext } from '../../context/CyclesContext'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

const schema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  durationInMinutes: zod
    .number()
    .min(5, 'Ciclo de, no mínimo, 5 minutos')
    .max(60, 'Ciclo de, no máximo, 60 minutos'),
})

type FormData = zod.infer<typeof schema>

export function Home() {
  const { activeCycle, interruptCurrentCycle, createNewCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      task: '',
      durationInMinutes: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleSubmitNewCycleForm({ task, durationInMinutes }: FormData) {
    createNewCycle({
      task,
      durationInMinutes,
    })
    reset()
  }

  const task = watch('task')
  const isSubmitButtonDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleSubmitNewCycleForm)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            <span>Interromper</span>
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitButtonDisabled}>
            <Play size={24} />
            <span>Começar</span>
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
