/* eslint-disable class-methods-use-this */
import Position from './Position'

class TicTacToe {
  constructor(id, players, priority) {
    this.id = id
    this.players = players
    this.priority = priority
    this.board = []
    this.init()

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
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        this.board.push(new Position(i, j, false, null))
      }
    }
  }

  setValue(x, y, value) {
    const position = this.board.find(el => el.x === x && el.y === y)
    try {
      if (position.canSetValue()) {
        position.setValue(value)
        this.isWinner(value)
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  isWinner(value) {
    // pega todo os itens preenchidos com o valor X ou O
    const items = this.board.filter(el => el.value === value).map(el => el.stringPosition)

    return this.winConditions.some(winC => {
      return winC.every(it => items.some(item => item === it))
    })
  }
}

export default TicTacToe
