//
// app.js
//
// File for defining our main app modules and all its sub-modules, 
// so that they can be used directly in other places.
//

(function () {
    'use strict';

    angular.module('movieFinder', [
        'ngRoute',
        'ngAnimate',
        'mgcrea.ngStrap',
        'movieFinder.controllers',
        'movieFinder.directives',
        'movieFinder.filters',
        'movieFinder.services',
        'movieFinder.constants',
        'movieFinder.templates'
    ]);

    angular.module('movieFinder.controllers', []);
    angular.module('movieFinder.directives', []);
    angular.module('movieFinder.filters', []);
    angular.module('movieFinder.services', []);
    angular.module('movieFinder.constants', []);
    angular.module('movieFinder.templates', []);
})();