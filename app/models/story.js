var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StorySchema = new Schema({

    creator: {type: Schema.Types.ObjectId, fef: 'User'},
    content: String,
    creted: {type: Date, default: Date.now}

});

module.exports = mongoose.model('Story', StorySchema);
