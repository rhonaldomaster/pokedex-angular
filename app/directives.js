(function () {
  var componentsFolder = 'app/components/';
  angular.module('pokedex-directives', []);
  angular.module('pokedex-directives').directive('pokedexHeader',function () {
    return {
      restrict: 'E',
      templateUrl: componentsFolder+'header/pokedex-header.html'
    };
  });

  angular.module('pokedex-directives').directive('pokemonList',function () {
    return {
      restrict: 'E',
      templateUrl: componentsFolder+'templates/pokemon-list.html'
    };
  });

  angular.module('pokedex-directives').directive('pokemonResume',function () {
    return {
      restrict: 'E',
      templateUrl: componentsFolder+'templates/pokemon-resume.html'
    };
  });
})();
