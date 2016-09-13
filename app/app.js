(function () {
  var apiUrl = '//pokeapi.co/api/v2/', offset = 0, pageItems = 100,
  loadingImg = "<img src='img/loading.gif' class='loading-img'>";
  var mainDiv = document.querySelector('.js-main-div');
  angular.module('pokedex',['pokedex-directives']);

  angular.module('pokedex').controller('MainController', ['$http','$scope', function ($http,$scope) {
    var ajx = $http.get(apiUrl+'pokemon/',{limit: pageItems, offset: offset});
    ajx.success(function (data) {
      $scope.pokemons = data.results;
      $scope.offset = offset + 1;
      $scope.pageItems = pageItems;
    });
  }]);

})();
