(function() {

  'use strict';

  angular
    .module('ngContacts')
    .controller('personsListController',PersonsListController);

    PersonsListController.$inject = ['DataService'];


    function PersonsListController(DataService) {
      var vm = this;
      vm.data = DataService.personsData;

      vm.activePerson = {};
      vm.changeActivePerson = changeActivePerson;

      function changeActivePerson(index) {
        vm.activePerson = index;
      }

    }

})();