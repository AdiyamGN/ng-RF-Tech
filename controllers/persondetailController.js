(function() {

	'use strict';

	angular
		.module('ngContacts')
		.controller('personsDetailController', personsDetailController);

		personsDetailController.$inject = ['$state','$stateParams','DataService'];

		function personsDetailController($state, $stateParams, DataService) {

			var vm = this;
			vm.DataService = DataService;
			vm.DataService.selectedPerson = vm.DataService.getPerson($stateParams.index);

			

		}

})();