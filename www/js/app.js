// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.feedback', {
      url: '/feedback',
      views: {
        'menuContent': {
          templateUrl: 'templates/feedback.html',
            controller: 'feedbackCtrl'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
            controller: 'profileCtrl'
        }
      }
    })
  .state('app.paq', {
      url: '/paq',
      views: {
        'menuContent': {
          templateUrl: 'templates/paq.html',
            controller: 'paqCtrl'
        }
      }
    })
  .state('app.bookmarks', {
      url: '/bookmarks',
      views: {
        'menuContent': {
          templateUrl: 'templates/bookmarks.html',
            controller: 'bookmarksCtrl'
        }
      }
    })
  .state('app.ask', {
      url: '/ask',
      views: {
        'menuContent': {
          templateUrl: 'templates/ask.html',
            controller: 'askCtrl'
        }
      }
    })
  .state('app.filter', {
      url: '/filter',
      views: {
        'menuContent': {
          templateUrl: 'templates/filter.html',
            controller: 'filterCtrl'
        }
      }
    })
  .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        }
      }
    })
  .state('app.otp', {
      url: '/otp',
      views: {
        'menuContent': {
          templateUrl: 'templates/otp.html',
            controller: 'otpCtrl'
        }
      }
    })
  .state('app.standard', {
      url: '/standard',
      views: {
        'menuContent': {
          templateUrl: 'templates/standard.html',
            controller: 'standardCtrl'
        }
      }
    })
  .state('app.chatlist', {
      url: '/chatlist',
      views: {
        'menuContent': {
          templateUrl: 'templates/chatlist.html',
            controller: 'chatlistCtrl'
        }
      }
    })
  .state('app.chat', {
      url: '/chat',
      views: {
        'menuContent': {
          templateUrl: 'templates/chat.html',
            controller: 'chatCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
    
    
$ionicConfigProvider.navBar.alignTitle('center');
    
});
