const express = require("express");
const router = express.Router();

const userController = require('../controllers/user-controller');

router.post('/', userController.user);
router.get("/:id", userController.user_id);
router.post("/register", userController.user_register);
router.post("/login", userController.user_login);

module.exports = router;