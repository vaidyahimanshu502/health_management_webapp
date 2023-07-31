const express = require("express");
const router = express.Router();

const render_controller = require("../controllers/rendering_datas_controller");

router.get("/register", render_controller.show_register_page);
router.get("/signin", render_controller.show_login_page);
router.get('/after_signin', render_controller.after_login);
router.get("/profile", render_controller.profile);

module.exports = router;
