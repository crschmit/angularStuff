export const config =
  ($stateProvider,
   $logProvider,
   $locationProvider,
   $urlRouterProvider,
   localStorageServiceProvider) => {

    'ngInject'

    $logProvider.debugEnabled(true)
    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/')

    localStorageServiceProvider
      .setPrefix('clicker')

    // $stateProvider.state({
    //   name: 'simplePerson',
    //   url: '/{givenName}/{familyName}',
    //   component: 'simplePerson',
    //   resolve: {
    //     givenName: ($transition$) => {
    //       return $transition$.params().givenName
    //     },
    //     familyName: ($transition$) => {
    //       return $transition$.params().familyName
    //     }
    //   }
    // })

    $stateProvider
      .state({
        name: 'clicker',
        url: '/clicker',
        abstract: true
      })
      .state({
        name: 'clicker.oneBtn',
        url: '/oneBtn',
        component: 'oneBtn'
      })
      .state({
        name: 'clicker.twoBtns',
        url: '/twoBtns',
        component: 'twoBtns'
      })
      .state({
        name: 'clicker.multipleStates',
        url: '/multipleStates',
        component: 'multipleStates'
      })
  }
