var myApp = angular.module('gallery',[]);

myApp.controller('GalleryCtrl', ['$scope', function($scope) {
  $scope.about = [
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060378/bio_001_tx4ic6.jpg", alt: "about" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/a_hflip/v1488060758/seminario_004_mgmtmv.jpg", alt: "about" }
  ];

  $scope.seminarios = [
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060747/seminario_001_dj877x.jpg", alt: "seminario_01" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060770/seminario_005_vs3jyu.png", alt: "seminario_02" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060780/seminario_008_fhwyu8.jpg", alt: "seminario_03" },
  ];
}]);
