import 'SimpleStateDisplay/simpleStateDisplay.styles'
import templateUrl from 'SimpleStateDisplay/simpleStateDisplay.template'

const controller = class SimpleStateDisplayController {
  constructor ($log) {
    'ngInject'
    $log.log('simple state display...')
    this.log = $log
  }
}

export const simpleStateDisplay = {
  controller,
  templateUrl,
  controllerAs: 'ssd',
  bindings: {
    name: '<',
    value: '<'
  }
}
