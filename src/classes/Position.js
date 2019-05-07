class Position {
  constructor(x, y, hasValue, value) {
    this.x = x
    this.y = y
    this.hasValue = hasValue
    this.value = value
    this.stringPosition = `${x},${y}`
  }

  setValue(value) {
    if (this.hasValue) {
      throw new Error('Esta unidade já possui valor definido.')
    } else {
      this.value = value
      this.hasValue = true
    }
  }

  canSetValue() {
    return !this.hasValue
  }
}

export default Position
