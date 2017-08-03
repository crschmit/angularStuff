import 'TwoBtns/twoBtns.styles'
import templateUrl from 'TwoBtns/twoBtns.template'

const controller = class TwoBtnsController {
  constructor ($log) {
    'ngInject'
    $log.log('one button clicker...')
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

export const twoBtns = {
  controller,
  templateUrl,
  controllerAs: 'twoBtns'
}
