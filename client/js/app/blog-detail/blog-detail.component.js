'use strict';

angular.module('blogDetail').
  component('blogDetail', {
    templateUrl: '/templates/blog-detail.html',
    controller: function(Post, $http, $location, $routeParams, $scope) {
      Post.query(function(data){
        $scope.notFound = true;
        angular.forEach(data, function(post){
          if (post.id == $routeParams.id){
            $scope.notFound = false;
            $scope.post = post;
            resetReply()
          }
        });
      })

      $scope.addReply = function() {
        console.log("reply", $scope.reply);
        $scope.post.comments.push($scope.reply);
        resetReply();
      }

      $scope.deleteComment = function(comment) {
        $scope.$apply(
          $scope.post.comments.splice(comment, 1)
        );
      }

      function resetReply(){
        $scope.reply = {
          id: $scope.post.comments.length + 1,
          text: ''
        }
      }
      // $http.get('/blogItems').then(successCallback, errorCallback);

      // function successCallback(response, status, config, statusText){
      //   // console.log("succes", response.data);
      //   $scope.notFound = true;
      //   var blogItems = response.data;
      //   angular.forEach(blogItems, function(post){
      //     if (post.id == $routeParams.id){
      //       $scope.notFound = false;
      //       $scope.post = post;
      //     }
      //   });
      // }
      // function errorCallback(response, statust, config, statusText){
      //   $scope.notFound = true;
      //   console.log(response);
      // }
      //
      if ($scope.notFound) {
        $location.path('/404');
      }
    }
  });
