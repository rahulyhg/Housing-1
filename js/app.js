var demo = angular.module('myApplicationModule', ['uiGmapgoogle-maps']);

demo.controller('ExampleController', function ($scope) {
    $scope.map = {
        center: {
            latitude: 18.9750,
            longitude: 72.8258,
        },
        zoom: 4
    };
    $scope.options = {
        scrollwheel: true
    };
    $scope.circles = [
        {
            id: 1,
            center: {
                latitude: 18.9750,
                longitude: 72.8258,
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

                center_changed: function () {
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

        ];
    $scope.marker = {
        id: 0,
        coords: {
            latitude: 18.9750,
            longitude: 72.8258,
        },
        options: {
            draggable: false
        },
        icon: {
            url: "temop/download.png"
        },
        events: {
            dragend: function () {
                var lat = $scope.marker.getPosition().lat();
            }
        }

    }

    console.log($scope.circles);
});