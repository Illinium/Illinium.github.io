var app = angular.module("SampleApp", []);

app.controller("SampleAppCtrl", function ($scope) {

    // $scope.rotatorView = "Rot.html";

    $scope.coll1 = "coll1.html";
    $scope.coll2 = "coll2.html";
    $scope.coll3 = "coll3.html";
    $scope.url;

    $scope.ShowRot = true;

    $scope.showColl1 = function () {
        $scope.ShowRot = false;
        $scope.url = $scope.coll1;
    }

    $scope.showColl2 = function () {
         $scope.ShowRot = false;
        $scope.url = $scope.coll2;
    }

    $scope.showColl3 = function () {
         $scope.ShowRot = false;
        $scope.url = $scope.coll3;
    }

    $scope.backRot = function(){
        $scope.url = '';
        $scope.ShowRot = true;
    }

    $scope.news1 = "news1.html";
    $scope.news2 = "news2.html";
    $scope.news3 = "news3.html";
    $scope.url2;

    $scope.ShowNews = true;

     $scope.showNews1 = function () {
        $scope.ShowNews = false;
        $scope.url2 = $scope.news1;
     }

    //  $scope.news2 = function () {
    //     $scope.url2 = $scope.news2;
    //  }

    // $scope.news3 = function () {
    //     $scope.url2 = $scope.news3;
    //  }
    $scope.backNews = function(){
        $scope.url2 = ''; 
        $scope.ShowNews = true;
    }
});