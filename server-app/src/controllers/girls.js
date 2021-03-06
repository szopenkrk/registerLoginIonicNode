var Girl = require('../models/Girl');


exports.postGirl = function (req, res) {
    var girl = new Girl({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        cash: req.body.cash,
        username: req.body.username,
        thumbnail: req.body.thumbnail
    });

    girl.name = req.body.name;
    girl.password = req.body.password;
    girl.email = req.body.email;
    girl.cash = req.body.cash;
    girl.username = req.body.username;
    girl.thumbnail = req.body.thumbnail;

    girl.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.json({msg: 'Girl has been added to DB', data: girl});
    })
};

exports.getGirls = function (req, res) {
    Girl.find(function (err, girl) {
        if (err) {
            res.send(err);
        }
        res.json(girl);
    })
};

exports.getGirl = function (req, res) {
    Girl.findById(req.params.girl_id, function (err, girl) {
        if (err) {
            res.send(err)
        }
        res.json(girl);
    })
};

exports.putGirl = function (req, res) {
    Girl.findById(req.params.girl_id, function (err, girl) {

        if (err) {
            res.send(err)
        }

        girl.name = req.body.name || girl.name;
        girl.password = req.body.password || girl.password;
        girl.email = req.body.email || girl.email;
        girl.cash = req.body.cash || girl.cash;
        girl.username = req.body.username || girl.username;
        girl.thumbnail = req.body.thumbnail || girl.thumbnail;

        girl.save(function (err) {
            if (err) {
                res.send(err)
            }

            res.json(girl)
        })
    })

};

exports.deleteGirl = function (req,res) {
    Girl.findByIdAndRemove(req.params.girl_id,function(err){
        if(err){
            res.send(err);
        }
        res.json({msg:'Girl has been removed'});
    })
};

