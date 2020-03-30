(function() {
    angular.module('primeiraApp').controller('DashboardCtrl', [
        '$http',
        DashboardController
    ])

    function DashboardController($http) {
        const vm = this
        vm.getSummary = function() {
            const url = 'http://localhost:3003/api/billingSummary'
            $http.get(url).then(function(response){
                var data = response.data
                vm.credit = data.credit
                vm.debt = data.debt
                vm.total = data.credit - data.debt
            })
        }

        vm.getSummary()
    }

})()