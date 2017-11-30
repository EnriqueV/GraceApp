angular.module('starter.controllers',[])
.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $http,$firebase, $state, $cordovaCalendar,$cordovaLocalNotification,$cordovaDialogs) {
    // Form data for the login modal

      if(localStorage.email){
        $scope.email= localStorage.email;
        $scope.edad=localStorage.password;


      }
    $scope.login = function() {


      var email= $scope.email;

      localStorage.email= email;
      localStorage.password= $scope.edad;

      if(email== undefined){
        $cordovaDialogs.alert('no puede dejar campos vacios', 'error', 'ok')
        .then(function() {
          // callback success
        });



      }else{
        var firebaseObj = new Firebase("https://radio-chat-4c39e.firebaseio.com/radio-chat-4c39e");
        var fb = $firebase(firebaseObj);

        fb.$push({
            email: $scope.email,
            edad: $scope.edad
        }).then(function(ref) {
            console.log(ref);
             $scope.email="";
             $scope.edad="";
             $state.go('slide');
        }, function(error) {
            console.log("Error:", error);
        });

      }





      }

      $scope.checkDate=function(){
       localStorage.fecha= true;
      }

      $scope.grace = function() {

        var fecha= $scope.email;


        if(fecha.length<0){
          $cordovaDialogs.alert('no puede dejar campos vacios', 'error', 'ok')
          .then(function() {
            // callback success
          });


        }else{
          var firebaseObj = new Firebase("https://radio-chat-4c39e.firebaseio.com/radio-chat-4c39e");
          var fb = $firebase(firebaseObj);

          fb.$push({
              fecha: $scope.email,
              prodducto: $scope.edad
          }).then(function(ref) {
              console.log(ref);
               $scope.email="";
               $scope.edad="";
          }, function(error) {
              console.log("Error:", error);
          });

        }





        }

        $scope.sing = function() {

          var fecha= $scope.email;
          if(fecha.length<0){
            $cordovaDialogs.alert('no puede dejar campos vacios', 'error', 'ok')
            .then(function() {
              // callback success
            });


          }else{
            var firebaseObj = new Firebase("https://radio-chat-4c39e.firebaseio.com/radio-chat-4c39e");
            var fb = $firebase(firebaseObj);

            fb.$push({
                email: $scope.email,
                nombre: $scope.name,
                apellido: $scope.lname


            }).then(function(ref) {
                console.log(ref);
                 $scope.email="";
                 $scope.name="";
                 $scope.lname="";
                 $cordovaDialogs.alert('Bienvenido a grace', '', 'ok')
                 .then(function() {
                   // callback success
                 });
            }, function(error) {
                console.log("Error:", error);
            });

          }





          }

          $scope.go=function(){
            $state.go('start');


          }
          $scope.aler=function(param){


            var istrue= localStorage.fecha;
            if(istrue!=undefined){
              if(param==1){

                              $cordovaDialogs.alert('GRACE ha programado tus próximas aplicaciones', 'Has seleccionado NOGESTAL-1 ', 'ok')
                              .then(function() {
                                // callback success
                              });
                              localStorage.removeItem("fecha");
                            }else if(param==2){


                              $cordovaDialogs.alert('GRACE ha programado tus próximas aplicaciones', 'Has seleccionado DEPROXONE ', 'ok')
                              .then(function() {
                                // callback success
                              });
                              localStorage.removeItem("fecha");
                            }else{

                              $cordovaDialogs.alert('GRACE ha programado tus próximas aplicaciones', 'Has seleccionado GYTROGEN DEPOT ', 'ok')
                              .then(function() {
                                // callback success
                              });
                              localStorage.removeItem("fecha");
                            }

            }else{
              $cordovaDialogs.alert('No puedes elejir un productos sin asignar una fecha', 'error!', 'ok')
              .then(function() {
                // callback success
              });
            }





          }

          $scope.back=function(){
            $state.go('start');



          }

          $scope.even=function(){
            var today= $scope.dat;
            var currentdate = new Date();
            currentdate.setDate(currentdate.getDate() + 27);
            var cur= currentdate;
            $cordovaCalendar.createEvent({
              title: 'Tiempo de duración de anticonceptivo',
              location: 'Grace única línea de anticonceptivos inyectables con un anticonceptivo para cada tipo de mujer',
              notes: 'Grace ayuda al recordatorio de aplicación de tu anticonceptivo',
              startDate: cur,
              endDate: cur
          }).then(function (result) {

              $cordovaDialogs.alert('Esta siguiendo tu período ve a tu calendario para más detalles', 'Grace', 'ok')
              .then(function() {
                // callback success
              });

              //$scope.add();
          }, function (err) {
              console.error("There was an error: " + err);
          })

          }


          $scope.add = function() {
            var alarmTime = new Date();
            alarmTime.setMinutes(alarmTime.getMinutes() + 1);
            $cordovaLocalNotification.add({
                id: "1234",
                date: alarmTime,
                message: "No olvides la aplicación de tu producto anticonceptivo",
                title: "Grace",
                autoCancel: true,
                sound: null
            }).then(function () {
                console.log("The notification has been set");
            });
            $scope.isScheduled();
        };

        $scope.isScheduled = function() {
            $cordovaLocalNotification.isScheduled("1234").then(function(isScheduled) {

                $cordovaDialogs.alert('Esta siguiendo tu período ve a tu calendario para más detalles', 'Grace', 'ok')
                .then(function() {
                  // callback success
                });

            });
        }


        $scope.map=function(){
          window.open('https://www.google.com.sv/maps/place/Laboratorios+Arsal/@13.685278,-89.1966779,15z/data=!4m5!3m4!1s0x0:0xefa8f76d3d79e349!8m2!3d13.685278!4d-89.1966779','_system');
        }




})
.controller("SlideController", function($scope, $ionicSlideBoxDelegate) {
  $scope.navSlide = function(index) {
      $ionicSlideBoxDelegate.slide(index, 500);
  }
});




