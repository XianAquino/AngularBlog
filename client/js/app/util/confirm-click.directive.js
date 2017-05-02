'use strict';

angular.module('confirmClick').
  directive('confirmClick', function() {
    return {
      restrict: "A",
      link: function(scope, element, attr) {
        var msg = attr.confirmClick || 'Are you sure?';
        var clickAction = attr.confirmedClick;
        element.bind('click', function (event){
          event.stopImmediatePropagation();
          event.preventDefault();
          if (window.confirm(msg)) {
            scope.$eval(clickAction)
          } else {
            console.log("stop")
          }
        })
      }
    }
  })

// angular.module('confirmClick').
//   directive('confirmClick', function($rootScope, $location){
//     return {
//       scope: {
//         message: "@message",
//         eq: "=eq",
//         post: "=post"
//       },
//       restrict: "E",
//       template: "<a ng-href='#'>{{ post.title }}</a>",
//       link: function(scope, element, attr) {
//         var msg = scope.message || "Are you sure?"
//         element.bind("click", function(event) {
//           if (window.confirm(msg)) {
//             $rootScope.$apply(function() {
//               $location.path('/blog/' + scope.post.id);
//             })
//           }
//         })
//         console.log("scope", scope.message)
//         console.log("scope", scope.eq)
//         console.log("scope", scope.post)
//         // console.log("element", element)
//         // console.log("attr", attr)
//         // console.log("sssss", attr.confirmClick)
//       }
//     };
//   });
