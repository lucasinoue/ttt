import { Position } from './classes'

export function init() {

  const tictac = []

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      tictac.push(new Position(i, j, false, null))       
    }
  }

  return tictac
}