(function() {
    'use strict';
    angular
        .module('taskManagerApp')
        .factory('Workspace', Workspace);

    Workspace.$inject = ['$resource'];

    function Workspace ($resource) {
        var resourceUrl =  'api/workspaces/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
