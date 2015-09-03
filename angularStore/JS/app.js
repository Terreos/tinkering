(function(){
  var app = angular.module('gemStore', ['store-directives']);
  
  app.controller('StoreController',['$http', function($http){
    var store = this;
    store.products = [];
    $http.get('product/store-products.json').success(function(data){
      store.products = data;
    });
  }]);
  
  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newValue){
      if (newValue) {
      this.current = newValue;
      } else {
        this.current = 0;
      }
    };
  });
  
  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product) {
       this.review.createdOn = Date.now();
       product.reviews.push(this.review);
       this.review = {};
    };
  });
})();