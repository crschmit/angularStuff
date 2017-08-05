import 'MultipleStates/multipleStates.styles'
import templateUrl from 'MultipleStates/multipleStates.template'

const controller = class MultipleStatesController {
  constructor ($log) {
    'ngInject'
    $log.log('multiple states clicker...')
    this.log = $log

    this.score = 0
  }

  sayHello () {
    this.log.log("Hello")
  }

  incScore () {
    this.score += 1
  }
}

export const multipleStates = {
  controller,
  templateUrl,
  controllerAs: 'multipleStates'
}
