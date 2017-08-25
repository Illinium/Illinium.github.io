var app = angular.module("SampleApp", []);

app.controller("SampleAppCtrl", function ($scope) {

    $scope.rotView = "rot.html";

    $scope.coll1View = "coll1.html";
    $scope.coll2View = "coll2.html";
    $scope.coll3View = "coll3.html";

    $scope.url = $scope.rotView;

    $scope.showColl1 = function () {
        $scope.url = $scope.coll1;
    }

    $scope.showColl2 = function () {
        $scope.url = $scope.coll2;
    }

    $scope.showColl3 = function () {
        $scope.url = $scope.coll3;
    }

     $scope.url2 = $scope.news;

     $scope.news1 = function () {
        $scope.url2 = $scope.news1;
     }

     $scope.news2 = function () {
        $scope.url2 = $scope.news2;
     }

    $scope.news3 = function () {
        $scope.url2 = $scope.news3;
     }
});