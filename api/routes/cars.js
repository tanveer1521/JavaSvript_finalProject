const {
    index, show, create, update, destroy
} = require('../controllers/cars');

const passport = require('passport');

module.exports = router => {
    // localhost:4000/cars
    router.get('/cars', index);

    // localhost:4000/cars/98f3tg123
    router.get('/cars/:id', show);

    // localhost:4000/cars
    router.post('/cars', passport.authenticate('jwt', { session: false }), create);

    // localhost:4000/cars/update
    router.post('/cars/update', passport.authenticate('jwt', { session: false }), update);

    // localhost:4000/cars/destroy
    router.post('/cars/destroy', passport.authenticate('jwt', { session: false }), destroy);
};