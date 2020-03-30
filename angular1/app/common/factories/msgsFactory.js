(function() {
    angular.module('primeiraApp').factory('msgs', [
        'toastr',
        MsgsFactory
    ])

    function MsgsFactory(toastr) {
        function addMsg(msgs, title, method) {
            if(msgs instanceof Array) {
                msgs.forEach(msgs => toastr[method](msgs, title))
            } else {
                toastr[method](msgs, title)
            }
        }

        function addSuccess(msgs) {
            addMsg(msgs, 'Sucesso', 'success')
        }

        function addError(msgs) {
            addMsg(msgs, 'Erro', 'error')
        }

        return { addSuccess, addError }
    }
})()