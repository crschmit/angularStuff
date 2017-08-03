import 'OneBtn/oneBtn.styles'
import templateUrl from 'OneBtn/oneBtn.template'

const controller = class OneBtnController {
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

export const oneBtn = {
  controller,
  templateUrl,
  controllerAs: 'oneBtn'
}
