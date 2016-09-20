var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    router = express.Router();

var usersController =require('./src/controllers/users');
var girlsController =require('./src/controllers/girls');


var port = 8080;



//DB CONNECTING ------------------------------------
mongoose.connect('mongodb://user:pass@ds015909.mlab.com:15909/tbenterprise_db', function (err) {
    if (err) {
        console.log('connection errors', err);
    } else {
        console.log('connection to DB successful');
    }
});


//ROUTES ------------------------------------

router.use(function (req, res, next) {
    console.log('it\'s working');
    next();
});

router.get('/', function (req, res) {
    res.json({msg: 'home page'});
});

//REGISTER ROUTES ------------------------------------
router.route('/users')
    .post(usersController.postUser)
    .get(usersController.getUsers);

router.route('/users/:user_id')
    .get(usersController.getUser)
    .put(usersController.putUser)
    .delete(usersController.deleteUser);



router.route('/girls')
    .post(girlsController.postGirl)
    .get(girlsController.getGirls);

router.route('/girls/:girl_id')
    .get(girlsController.getGirl)
    .put(girlsController.putGirl)
    .delete(girlsController.deleteGirl)


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());






app.use('/api', router);

app.listen(port);

console.log('connected to ' + port);