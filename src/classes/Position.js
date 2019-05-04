export default class Position {
  constructor(x, y, hasValue, value) {
    this.x = x
    this.y = y
    this.hasValue = hasValue
    this.value = value
  }

  setValue(value) {
    if (this.hasValue) {
      throw new Error('Esta unidade já possui valor definido.')
    } else {
      this.value = value
      this.hasValue = true
    }
  }

}