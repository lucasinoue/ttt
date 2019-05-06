/* eslint-disable class-methods-use-this */
import Position from './Position'

class TicTacToe {
  constructor(id, players, priority) {
    this.id = id
    this.players = players
    this.priority = priority

    this.board = this.init()

    this.winConditions = [
      ['0,0', '0,1', '0,2'],
      ['1,0', '1,1', '1,2'],
      ['2,0', '2,1', '2,2'],
      ['0,0', '1.0', '2,0'],
      ['0,1', '1.1', '2,1'],
      ['0,2', '1.2', '2,2'],
      ['0,0', '1,1', '2,2'],
      ['0,2', '1,1', '2,0']
    ]
  }

  init() {
    const tictac = []

    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        tictac.push(new Position(i, j, false, null))
      }
    }

    return tictac
  }
}

export default TicTacToe
