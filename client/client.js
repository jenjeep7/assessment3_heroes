var app = angular.module('heroApp', []);

app.controller("HeroController", ["$http", function($http){
  console.log("client working");


var vm = this;

vm.options = ['Invisibility', 'Flight', 'Super Speed', 'Head Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity'];
vm.newHero = {};
  vm.heroes=[];


vm.getHero= function(){
  console.log("button works");
  $http.post("/createHero/new", vm.newHero).then(function(response){
    console.log('created hero');
  });
  //get heroes
  vm.updateHeroes();
};

vm.updateHeroes = function() {
  $http.get('/getHeroes/all').then(function(response){
    vm.heroes = response.data;
    console.log(vm.heroes);
  });
};
vm.deleteHero = function(ticket) {
  $http.delete('/deleteHero/delete' + heroes._id).then(function(response){
    console.log("Deleted");
    vm.updateHeroes();
  });
};


vm.updateHeroes();

}]);
