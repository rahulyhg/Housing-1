var demo = angular.module('myApplicationModule', ['uiGmapgoogle-maps']);

demo.controller('ExampleController', function ($scope) {
      $scope.map = {center: {latitude: 44, longitude: -108 }, zoom: 4 };
        $scope.options = {scrollwheel: true};
        $scope.circles = [
            {
                id: 1,
                center: {
                    latitude: 40.1451,
                    longitude: -99.6680
                },
                radius: 500000,
                stroke: {
                    color: '#08B21F',
                    weight: 2,
                    opacity: 1
                },
                fill: {
                    color: '#08B21F',
                    opacity: 0.5
                },
                events: {
                    
                        center_changed:function () {
                            console.log("Done");
    //             var a = $scope.circles.getBounds();
                    }
                },
                geodesic: true, // optional: defaults to false
                draggable: true, // optional: defaults to false
                clickable: true, // optional: defaults to true
                editable: true, // optional: defaults to false
                visible: true // optional: defaults to true
            }

        ];    $scope.marker = {
      id: 0,
      coords: {
        latitude: 40.1451,
        longitude: -99.6680
      },
          options: { draggable: true },
        icon: { url: "temop/download.jpg"},
            events: {
                dragend: function()
                {
                     var lat = $scope.marker.getPosition().lat();
                }
            }
            
    }
    
    console.log($scope.circles);
    });

