app.service('UserService',function (config,$http,$rootScope,$q,$timeout) {
    var service = this,
        path = '/users/';

    function getUrl() {
        return config.endpointUri + path;
    }
    service.all = function() {
       return $http.get(getUrl()).then(function(users) {
           return users.data;
       });
    };
    service.create = function (item) {
        return $http.post(getUrl(), item);
    };
});