'use strict';

angular.module('blogList').
  component('blogList', {
    templateUrl: '/templates/blog-list.html',
    controller: function(Post, $routeParams, $scope, $rootScope, $location) {
      // console.log( "route", $routeParams.id);
      // var  blogItems = [
      //   {title: "Some Title", id: 1, description: "This is a book"},
      //   {title: "Some Food", id: 2, description: "This is a Food"},
      //   {title: "Some Movie", id: 3, description: "This is a Movie"},
      //   {title: "Some Tea", id: 4, description: "This is a Tea"}
      // ];
      // $scope.blogId = $routeParams.id;

      function setUpCol(data, number) {
        $scope.cssClass = 'col-md-' + (12/number);
        $scope.items = data
        $scope.colItems = chunkArrayInGroups(data, number);
      }

      $scope.items = Post.query(function(data){
        // chunkArrayInGroups(data, 3
        setUpCol(data, 3)
      });
      function chunkArrayInGroups(array, unit) {
        var results = [];
        length = Math.ceil(array.length/ unit);

        for(var i = 0 ; i < length; i++) {
          results.push(array.slice(i*unit, (i+1) * unit));
        }
        return results;
      }

      $scope.title = "hi there";
      $scope.clicks = 1;
      $scope.goToItem = function(item) {
        $rootScope.$apply(function() {
          $location.path('/blog/' + item.id);
        })
      };

      $scope.someTitle = function() {
        $scope.clicks++;
      };
    }
  });
