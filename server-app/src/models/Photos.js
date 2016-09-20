var mongoose = require('mongoose'),
    PhotosSchema = new mongoose.Schema({
        photos: {type: Array, required: true},
    });

module.exports = mongoose.model('Photos', PhotosSchema);
