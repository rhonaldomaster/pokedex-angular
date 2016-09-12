(function () {
  var componentsFolder = 'app/components/';
  angular.module('pokedex',[]);

  angular.module('pokedex').directive('pokedexHeader',function () {
    return {
      restrict: 'E',
      templateUrl: componentsFolder+'header/pokedex-header.html'
    };
  });

  angular.module('pokedex').directive('pokemonList',function () {
    return {
      restrict: 'E',
      templateUrl: componentsFolder+'templates/pokemon-list.html'
    };
  });

  angular.module('pokedex').directive('pokemonResume',function () {
    return {
      restrict: 'E',
      templateUrl: componentsFolder+'templates/pokemon-resume.html'
    };
  });

  angular.module('pokedex').controller('MainController', function () {
    var apiUrl = '//pokeapi.co/api/v2/', offset = 0, pageItems = 100,
    loadingImg = "<img src='img/loading.gif' class='loading-img'>";
    var $mainDiv;
  });

})();
