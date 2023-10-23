var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('employees', userSchema);