'use strict';

angular.
  module('post').
    factory('Post', function($resource){
      var url = '/blogItems';
      return $resource(url, {}, {
        query: {
          method: "GET",
          params: {},
          isArray: true,
          cache: true,
        },
        get: {
          method: "GET",
          // params: {"id": @id},
          isArray: true,
          cache: true,
        }
      })
    })
