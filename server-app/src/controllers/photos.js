var Photos = require('../models/Photos');


exports.postPhoto = function (req, res) {
    var photo = new Photos({
        photos: req.body.photos,
    });

    photo.photos = req.body.photos;

    photo.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.json({msg: 'Photo has been added to girl', data: photo});
    })
};

exports.getPhotos = function (req, res) {
    Photos.find(function (err, photo) {
        if (err) {
            res.send(err);
        }
        res.json(photo);
    })
};

exports.getPhoto = function (req, res) {
    Photos.findById(req.params.photo_id, function (err, photo) {
        if (err) {
            res.send(err)
        }
        res.json(photo);
    })
};

exports.deletePhoto = function (req,res) {
    Photos.findByIdAndRemove(req.params.photo_id,function(err){
        if(err){
            res.send(err);
        }
        res.json({msg:'Photo has been removed'});
    })
};

