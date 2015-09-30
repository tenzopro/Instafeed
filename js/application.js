(function(){
    
  var client_id = 'd668645b45fc481abfd130d94eb91cc6';
  var user_id = 'velvetandroselondon';

  var app = angular.module('instafeed', []);

  app.factory("InstagramAPI", ['$http', function($http) {
    return {
      fetchPhotos: function(callback){
          
        var endpoint = "https://api.instagram.com/v1/users/" + user_id + "/media/recent/?";
        endpoint += "count=99";
        endpoint += "client_id=" + client_id;
        endpoint += "&callback=JSON_CALLBACK";
        $http.jsonp(endpoint).success(function(response){
          callback(response.data);
        });
      }
    }
  }]);

  app.controller('ShowImages', function($scope, InstagramAPI){
    $scope.layout = 'grid';
    $scope.data = {};
    $scope.pics = [];
      
    InstagramAPI.fetchPhotos(function(data){
      $scope.pics = data;
    });
  });

})();