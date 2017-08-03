import 'app/app.styles'
import templateUrl from 'app/app.template'

const controller = class ClickerController {
  constructor ($log, $state, localStorageService) {
    'ngInject'
    $log.log('clicker...')
  }
}

export const Clicker = {
  controller,
  templateUrl,
  controllerAs: 'clicker'
}
