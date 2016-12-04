var mongoose = require('mongoose'),
    PhotosSchema = new mongoose.Schema({
        photos: {type: String, required: true},
    });

module.exports = mongoose.model('Photos', PhotosSchema);
