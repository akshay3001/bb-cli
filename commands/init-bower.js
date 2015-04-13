var Command = require('ronin').Command;
var bbscaff = require('../lib/bbscaff');
var path = require('path');

var initBower = function(){
    var templatesDir = path.join(__dirname, '..', 'templates');

    require(path.join(templatesDir, 'init-bower', 'bbscaff'))(bbscaff);
};

var InitBower = Command.extend({
    desc: 'Project setup configuration (generates bower.json, .bowerrc ant other)',

    run: initBower
});

module.exports = InitBower;