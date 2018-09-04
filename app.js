angular.module('lesleys-books', [
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('current-year-bookshelf', {
      url: "/bookshelf",
      template: "<current-year-bookshelf></current-year-bookshelf>"
    })
    .state('all-time-favourites', {
      url: "/all-time-favourites",
      template: "<all-time-favourites></all-time-favourites>"
    })
  }
)
