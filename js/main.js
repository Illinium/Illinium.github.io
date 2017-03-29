var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true)

	$routeProvider
	.when("/", {
		templateUrl : "main.html"
	})
	.when("/films", {
		templateUrl : "films.html"
	})
	.when("/serials", {
		templateUrl : "serials.html"
	})
	.when("/multfilms", {
		templateUrl : "multfilms.html"
	})
	.when("/single", {
		templateUrl : "single.html"
	})
	.when("/search", {
		templateUrl : "search.html"
	})
	.otherwise({
    templateUrl :  "main.html"
    });

});

app.controller('appCtrl', function($scope, $location, $http){
	$http.get('data.json').success(function(dat){
		$scope.data = dat;
	});

	$scope.limitValue = "12";
	$scope.single = {};
	$scope.review = function(dat){
		$scope.single = dat;
		$location.path("/single")
	};
	$scope.addLike = function(){
		this.single.likes += 1
	};
	$scope.addDislike = function(){
		this.single.dislikes += 1
	};

});
app.filter('youtubeEmbedUrl', function ($sce) {
  return function(videoId) {
    return $sce.trustAsResourceUrl(videoId);
  };
});

app.controller('formCtrl1', function($scope){

});




 