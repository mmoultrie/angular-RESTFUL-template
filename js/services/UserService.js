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

    service.getById = function(id) {
        return $http.get(getUrl() + id).then(function(obj) {
            return obj.data;
        });
    };

    service.update = function(obj) {
        return $http.put(getUrl(), obj);
    };

    service.create = function (obj) {
        return $http.post(getUrl(), obj);
    };
});