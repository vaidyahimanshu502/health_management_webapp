const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user_controller');

/** ****************APIs Routes*************** **/
router.post('/register', user_controller.register);
router.post('/login', user_controller.logIn);
router.put('/activity', user_controller.add_activity);
router.put('/nutrition', user_controller.add_nutritions);
router.put('/vitals', user_controller.add_vitals);

/** ****************Controller Routes******************** **/
router.post('/register_user', user_controller.register_user);
router.post('/signin_user', user_controller.login_user);

module.exports = router;