const express = require("express");
const router = express.Router();
const auth = require('../config/auth');
const userController = require('../controllers/user-controller');

router.post('/', auth.optional, userController.user);
router.get("/get/:id", auth.optional, userController.user_id);
router.post("/register", auth.optional, userController.user_register);
router.post("/login", auth.optional, userController.user_login);

module.exports = router;