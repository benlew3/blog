angular.module('blogs', []);

angular.module('contacts').controller('BlogsController', ['$scope', function($scope) {
  $scope.blogs = MY_BLOGS;

  $scope.showBlog = function(blog) {
    $scope.currentBlog = blog;
  }
}])