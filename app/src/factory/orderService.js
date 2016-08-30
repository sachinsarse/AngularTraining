angular.module('mainApp').factory('orderService', function() {
    var orderService = {};
    orderService.orders = [
        {
            id: 1,
            name: 'Mobile',
            key: 'year',
            reverse: false
        },
        {
            id: 2,
            name: 'Laptop'
        }
    ];

    orderService.square = function (a) {
        return a * a
    }

    return orderService;
});