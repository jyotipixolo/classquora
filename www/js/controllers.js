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
    .controller('loginCtrl', function ($scope, $stateParams, $interval) {

        /*ROUTING*/
        $scope.gotoregistertab = function () {
            console.log("test");
            $interval(function () {
                $('select').material_select();
            }, 100, 1);

        };

        /*VIEW LOGIC*/


        /*FUNCTIONS*/

    })
    .controller('otpCtrl', function ($scope, $stateParams) {

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
                'username': 'Mayur Nalwala',
                'time': '',
                'subject': 'Physics',
                'bookmarked': true,
                'question': "What does the fox say ? What does the fox say ? What does the ofx say ?",
                'answers': 2,
                'verified': true,
                'image': 'ionic.jpg'

        },
            {
                'id': 2,
                'userid': 2,
                'usertype': 2,
                'username': 'Mayur Nalwala',
                'time': '',
                'subject': 'Biology',
                'bookmarked': true,
                'question': "What does the fox say ? What does the fox say ? What does the ofx say ?",
                'answers': 4,
                'verified': true,
                'image': 'ionic.jpg'

        },
            {
                id: 3,
                'userid': 3,
                'usertype': 3,
                'username': 'Mayur Nalwala',
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
                'username': 'Mayur Nalwala',
                'time': '',
                'subject': 'Maths',
                'bookmarked': true,
                'question': "What does the fox say ? What does the fox say ? What does the ofx say ?",
                'answers': 4,
                'verified': false,
                'image': ''

        }
  ];


        /*STATES*/

        /*SUBJECT FILTER*/

        /*INITIALIZATIONS*/
        $scope.subjects = [{
            'id': '1',
            'name': 'Physics',
            'isactive': true,
            'active': 'physics-active.png',
            'inactive': 'physics.png'
    }, {
            'id': '2',
            'name': 'Chemistry',
            'isactive': true,
            'active': 'chemistry-active.png',
            'inactive': 'chemistry.png'
    }, {
            'id': '3',
            'name': 'Biology',
            'isactive': true,
            'active': 'biology-active.png',
            'inactive': 'biology.png'
    }, {
            'id': '4',
            'name': 'Maths',
            'isactive': true,
            'active': 'maths-active.png',
            'inactive': 'maths.png'
    }];



        $scope.showchapters = false;
        $scope.filterapplied = false;
        $scope.selectedsubject;
        $scope.dummychapterprefix = "";

        $scope.selectsubject = function (index) {


            if ($scope.showchapters) {
                if ($scope.selectedsubject == index) {
                    $scope.showchapters = false;
                }
            } else {
                $scope.showchapters = true;
            };

            $scope.dummychapterprefix = $scope.subjects[index].name;

            $scope.selectedsubject = index;
            
            for(var s=0; s<$scope.subjects.length; s++){
                
            };



            $scope.subjects[index].isactive = true;

            /*get chapters*/
            var getchapterssuccess = function (data, status) {
                $scope.chapters = data;
            };
            var getchapterserror = function (data, status) {
                $scope.chapters = data;
            };
            //$scope.getchapters($scope.subjects[index].id).success(getchapterssuccess).error(getchapterserror);
        };

        /*FLOAT BUTTON*/
        $scope.checkoverlay = function () {
            $interval(function () {
                console.log($('#floatbtn').hasClass('active'));
                $scope.floatactive = $('#floatbtn').hasClass('active');
            }, 200, 1);
        };
    })

.controller('PlaylistCtrl', function ($scope, $stateParams) {
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
        $scope.answers = [
            {
                'id': 1,
                'userid': 1,
                'usertype': 1,
                'username': 'Mayur N',
                'time': '',
                'answer': "What does the fox say ? What does the fox say ? What does the ofx say ?",
                'verified': true,
                'image': 'ionic.jpg'

        },
            {
                'id': 2,
                'userid': 2,
                'usertype': 2,
                'username': 'Mayur B',
                'time': '',
                'answer': "What does the fox say ? What does the fox say ? What does the ofx say ?",
                'verified': true,
                'image': 'ionic.jpg'

        },
            {
                id: 3,
                'userid': 3,
                'usertype': 3,
                'username': 'Mayur C',
                'time': '',
                'answer': "What does the fox say ? What does the fox say ? What does the ofx say ?",
                'verified': false,
                'image': ''

        },
            {
                id: 4,
                'userid': 2,
                'usertype': 2,
                'username': 'Mayur D',
                'time': '',
                'answer': "What does the fox say ? What does the fox say ? What does the ofx say ?",
                'verified': false,
                'image': ''

        }
  ];


    })
    .controller('standardCtrl', function ($scope, $stateParams, $location) {


        /*ROUTING*/
        $scope.gotoquestions = function () {
            $location.path('#/app/playllists');
        };
    })
    .controller('feedbackCtrl', function ($scope, $stateParams) {

    })
    .controller('profileCtrl', function ($scope, $stateParams, $location, $interval, $ionicPopup) {

        /*ROUTING*/
        $scope.gotoquestionsasked = function () {
            $location.path("/app/playlists");
        };

        /*SCENE CHANGES*/
        $scope.editprofile = false;

        $scope.editmode = function () {
            $scope.editprofile = !$scope.editprofile;

            /*Initialize Select*/
            $interval(function () {
                $('select').material_select();
            }, 100, 1);
        };

        /*CHANGE PASSWORD*/
        // An elaborate, custom popup
        $scope.changepassmodal = function () {

            passpopup = $ionicPopup.show({
                templateUrl: 'templates/changepassword.html',
                cssClass: 'passpopup',
                scope: $scope
            });
        };
        $scope.hidepasswordpopup = function () {
            passpopup.close();
        };

        /*CHANGE NUMBER*/
        // An elaborate, custom popup
        $scope.changenummodal = function () {

            numpopup = $ionicPopup.show({
                templateUrl: 'templates/changenumber.html',
                cssClass: 'passpopup',
                scope: $scope
            });
        };
        $scope.hidenumpopup = function () {
            numpopup.close();
        };



    })
    .controller('paqCtrl', function ($scope, $stateParams) {})
    .controller('bookmarksCtrl', function ($scope, $stateParams) {})
    .controller('askCtrl', function ($scope, $stateParams) {})
    .controller('filterCtrl', function ($scope, $stateParams) {})
    .controller('chatlistCtrl', function ($scope, $stateParams) {})

.controller('chatCtrl', function ($scope, $stateParams) {
    $scope.getpercent = function () {

    };
});