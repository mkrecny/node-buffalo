var ObjectID = require('../lib/objectid.js');
var ts = new Date().getTime()-(7*24*60*60*1000);
var id = new ObjectID(undefined, ts);
console.log(id.toString());
