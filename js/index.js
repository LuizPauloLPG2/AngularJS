angular.module("application", []);
angular.module("application").controller("applicationController", function ($scope){
  $scope.message = 'application initialize';
  $scope.title = 'People';
  $scope.people = [
    {name: 'Luiz', email: 'luizgroup@gmail.com', age: 19},
    {name: 'steve', email: 'stevegroup@gmail.com', age: 27},
  ];
  $scope.addPerson = function(person){
    // $scope.people.push(angular.copy(person));
    $scope.people.push(person);
    delete $scope.person;
  }

  $scope.delPerson = function(people){
    $scope.people = people.filter(function (person){
      if(!person.selected){
        return person;
      }      
    });
  }

  $scope.isPersonSelected = function(people){
    return people.some(function (person){
      return person.selected;
    });
  }

});
