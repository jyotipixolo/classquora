angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })
    .controller('loginCtrl', function ($scope, $stateParams) {

    })
    .controller('PlaylistsCtrl', function ($scope, $interval) {

        $scope.usertypes = [
            {
                id: 1,
                'type': 'teacher',
                'image': 'img/teacher.png'
        },
            {
                id: 2,
                'type': 'inhouse',
                'image': 'img/inhouse.png'
        },
            {
                id: 3,
                'type': 'non inhouse',
                'image': 'img/noninhouse.png'
        }
    ];
        $scope.questions = [
            {
                'id': 1,
                'userid': 1,
                'usertype': 1,
                'username': 'Abhay Amin',
                'time': '',
                'subject': 'Physics',
                'bookmarked': true,
                'question': "What does the fox say ? What does the fox say ? What does the ofx say ?",
                'answers': 2,
                'verified': true,
                'image': 'ionic.png'

        },
            {
                'id': 2,
                'userid': 2,
                'usertype': 2,
                'username': 'Abhay Amin',
                'time': '',
                'subject': 'Biology',
                'bookmarked': true,
                'question': "What does the fox say ? What does the fox say ? What does the ofx say ?",
                'answers': 4,
                'verified': true,
                'image': 'ionic.png'

        },
            {
                id: 3,
                'userid': 3,
                'usertype': 3,
                'username': 'Abhay Amin',
                'time': '',
                'subject': 'Chemistry',
                'bookmarked': true,
                'question': "What does the fox say ? What does the fox say ? What does the ofx say ?",
                'answers': 0,
                'verified': false,
                'image': ''

        },
            {
                id: 4,
                'userid': 2,
                'usertype': 2,
                'username': 'Abhay Amin',
                'time': '',
                'subject': 'Maths',
                'bookmarked': true,
                'question': "What does the fox say ? What does the fox say ? What does the ofx say ?",
                'answers': 4,
                'verified': false,
                'image': ''

        }
  ];


        $scope.checkoverlay = function () {
            $interval(function() {
                console.log($('#floatbtn').hasClass('active'));
                $scope.floatactive = $('#floatbtn').hasClass('active');
            }, 200, 1);

        };
    })

.controller('PlaylistCtrl', function ($scope, $stateParams) {

    })
    .controller('standardCtrl', function ($scope, $stateParams) {

    })
    .controller('feedbackCtrl', function ($scope, $stateParams) {

    })
    .controller('profileCtrl', function ($scope, $stateParams) {})
    .controller('paqCtrl', function ($scope, $stateParams) {})
    .controller('bookmarksCtrl', function ($scope, $stateParams) {})
    .controller('askCtrl', function ($scope, $stateParams) {})
    .controller('filterCtrl', function ($scope, $stateParams) {})
    .controller('chatlistCtrl', function ($scope, $stateParams) {})
    .controller('chatCtrl', function ($scope, $stateParams) {});
