const Nothing = undefined

export const State = class SimpleState {
  constructor (name, value) {
    this.name = name,
    this.value = value
  }

  get (n) {
    if (n === this.name) {
      return this.value
    } else {
      return Nothing
    }
  }

  getOrElse (n, f) {
    let res = this.get(n)
    if (res != Nothing) {
      return res
    } else {
      return f(n)
    }
  }

  set (n, v) {
    if (n === this.name) {
      return new State(this.name, v)
    } else {
      return Nothing
    }
  }

  setOrElse (n, v, f) {
    let res = this.set(n, v)
    if (res != Nohting) {
      return res
    } else {
      return f(n, v)
    }
  }
}
