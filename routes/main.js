const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth } = require("../middleware/auth");
const upload = require("../middleware/multer");

//Main Routes 
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);

//Routes for user login/signup
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", upload.single("file"), authController.postSignup);
router.get("/addPost", ensureAuth, postsController.getPostPage)
router.get("/feed", ensureAuth, postsController.getFeed)
router.get("/costumeType", ensureAuth, homeController.getCostumeType)

module.exports = router;
