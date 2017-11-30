angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider




  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })


  .state('registro', {
    url: '/registro',
    templateUrl: 'templates/registro.html'
  })
   .state('slide', {
    url: '/slide',
    templateUrl: 'templates/slide.html'
  })
   .state('start', {
    url: '/start',
    templateUrl: 'templates/start.html'
  })

  .state('about', {
    cache: false,
    url: '/about',
    templateUrl: 'templates/about.html'
  })
  .state('calendario', {
    cache: false,
    url: '/calendario',
    templateUrl: 'templates/calendario.html'
  })
  .state('pregunta', {
    cache: false,
    url: '/pregunta',
    templateUrl: 'templates/pregunta.html'
  })
  .state('map', {
    cache: false,
    url: '/map',
    templateUrl: 'templates/map.html'
  })


  $urlRouterProvider.otherwise('login');





});
