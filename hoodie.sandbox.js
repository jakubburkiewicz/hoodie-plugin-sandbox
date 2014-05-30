Hoodie.extend(function(hoodie) {
    'use strict';

    hoodie.hello = function(name) {
        return hoodie.task.start('hello', {
            name: name
        });
    };
});
