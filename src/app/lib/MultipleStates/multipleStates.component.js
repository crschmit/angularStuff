import 'MultipleStates/multipleStates.styles'
import templateUrl from 'MultipleStates/multipleStates.template'

// const controller = class MultipleStatesController {
//   constructor ($log) {
//     'ngInject'
//     $log.log('multiple states clicker...')
//     this.log = $log
//
//     this.score = 0
//   }
//
//   sayHello () {
//     this.log.log("Hello")
//   }
//
//   incScore () {
//     this.score += 1
//   }
// }

const controller = function ($log) {
  'ngInject'
  $log.log('multiple states clicker...')
  let ctrl = {}
  // let getScore = ctrl.getScore = () => ctrl.score
  let getScore = ctrl.getScore = () => store.score
  // let incScore = ctrl.incScore = () => ctrl.score += 1
  let incScore = ctrl.incScore = () => store.score += 1
  let log = ctrl.log = message => $log.log(message)
  let sayHello = ctrl.sayHello = () => log('Hello')
  // ctrl.score = 0
  let store = {}
  store.score = 0

  return ctrl
}

export const multipleStates = {
  controller,
  templateUrl,
  controllerAs: 'multipleStates'
}
