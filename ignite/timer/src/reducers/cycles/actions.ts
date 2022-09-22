import { ActionTypes, Cycle } from './types.d'

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function setCurentCycleAsFinishedAction() {
  return {
    type: ActionTypes.FINISH_CURRENT_CYCLE,
  }
}
