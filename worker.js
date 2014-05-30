module.exports = function(hoodie, callback) {
    hoodie.task.on('hello:add', function(db, task) {
        task.msg = 'Hello, ' + task.name;
        hoodie.task.success(db, task);
    });

    callback();
}
