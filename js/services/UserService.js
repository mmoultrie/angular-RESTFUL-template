app.service('UserService',function (config,$http) {
    var service = this,
        path = '/users/';

    function getUrl() {
        return config.endpointUri + path;
    }

    service.all = function() {
       return $http.get(getUrl()).then(function(list) {
           return list.data;
       });
    };

    service.update = function(obj) {
        return $http.put(getUrl(), obj);
    };

    service.create = function (obj) {
        return $http.post(getUrl(), obj);
    };
});