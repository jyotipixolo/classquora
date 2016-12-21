angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $location, $timeout, $ionicSideMenuDelegate) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.gotoprofile = function () {
            $ionicSideMenuDelegate.toggleLeft();
            $location.path("/app/profile");
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
    .controller('loginCtrl', function ($scope, $stateParams, $interval, $ionicSideMenuDelegate) {

        /*CONFIGURATONS*/
        $ionicSideMenuDelegate.canDragContent(false);

        /*ROUTING*/
        $scope.gotoregistertab = function () {
            console.log("test");
            $interval(function () {
                $('select').material_select();
                console.log($('.select-wrapper .caret'));
                $('.select-wrapper .caret').empty();
                $('.select-wrapper .caret').addClass('icon-caret-down');
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
            'inactive': 'physics.png',
            'chapters': [
                {
                    'chapterid': 1,
                    'chaptername': 'Chapter 1',
                    'selected': false
                },
                {
                    'chapterid': 2,
                    'chaptername': 'Chapter 2',
                    'selected': false
                },
                {
                    'chapterid': 3,
                    'chaptername': 'Chapter 3',
                    'selected': false
                },
                {
                    'chapterid': 4,
                    'chaptername': 'Chapter 4',
                    'selected': false
                },
                {
                    'chapterid': 5,
                    'chaptername': 'Chapter 5',
                    'selected': false
                }
            ]
    }, {
            'id': '2',
            'name': 'Chemistry',
            'isactive': true,
            'active': 'chemistry-active.png',
            'inactive': 'chemistry.png',
            'chapters': [
                {
                    'chapterid': 1,
                    'chaptername': 'Chemistry 1',
                    'selected': false
                },
                {
                    'chapterid': 2,
                    'chaptername': 'Chemistry 2',
                    'selected': false
                },
                {
                    'chapterid': 3,
                    'chaptername': 'Chemistry 3',
                    'selected': false
                },
                {
                    'chapterid': 4,
                    'chaptername': 'Chemistry 4',
                    'selected': false
                },
                {
                    'chapterid': 5,
                    'chaptername': 'Chemistry 5',
                    'selected': false
                }
            ]
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
        $scope.selectedsubject = null;
        $scope.dummychapterprefix = "";
        $scope.allchapsbutton = true;

        $scope.selectallchaps = function () {
            for (var c = 0; c < $scope.chapters.length; c++) {
                $scope.chapters[c].selected = true;
            };
            $scope.allchapsbutton = false;
        };
        $scope.addtochapfilter = function () {
            $scope.allchapsbutton = false;
            for (var c = 0; c < $scope.chapters.length; c++) {
                if ($scope.chapters[c].selected == false) {
                    $scope.allchapsbutton = true;
                };
            };
        };

        $scope.removefilters = function () {
            $scope.showchapters = false;
            $scope.selectedsubject = null;
        };

        $scope.selectsubject = function (index) {


            if ($scope.showchapters) {
                if ($scope.selectedsubject == index) {
                    $scope.showchapters = false;
                    $scope.selectedsubject = null;
                } else {
                    $scope.chapters = $scope.subjects[index].chapters;
                    $scope.selectedsubject = index;
                };
            } else {
                $scope.showchapters = true;

                $scope.chapters = $scope.subjects[index].chapters;
                $scope.selectedsubject = index;
            };





            for (var s = 0; s < $scope.subjects.length; s++) {

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

        $scope.question = {
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

        };
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
    .controller('standardCtrl', function ($scope, $stateParams, $location, $ionicSideMenuDelegate) {

        /*CONFIGURATIONS*/
        $ionicSideMenuDelegate.canDragContent(true);



        /*ROUTING*/
        $scope.gotoquestions = function () {
            $location.path('/app/playlists');
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
                console.log($('.select-wrapper .caret'));
                $('.select-wrapper .caret').empty();
                $('.select-wrapper .caret').addClass('icon-caret-down');
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