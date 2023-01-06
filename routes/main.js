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

//views infant
router.get("/infantCostumeBeginner", ensureAuth, postsController.getInfantCostumeBeginner) 
router.get("/infantCostumeEasy", ensureAuth, postsController.getInfantCostumeEasy)
router.get("/infantCostumeNormal", ensureAuth, postsController.getInfantCostumeNormal)
router.get("/infantCostumeHard", ensureAuth, postsController.getInfantCostumeHard)
router.get("/infantCostumeExpert", ensureAuth, postsController.getInfantCostumeExpert)

//views child
router.get("/childCostumeBeginner", ensureAuth, postsController.getChildCostumeBeginner)
router.get("/childCostumeEasy", ensureAuth, postsController.getChildCostumeEasy)
router.get("/childCostumeNormal", ensureAuth, postsController.getChildCostumeNormal)
router.get("/childCostumeHard", ensureAuth, postsController.getChildCostumeHard)
router.get("/childCostumeExpert", ensureAuth, postsController.getChildCostumeExpert)

//views adult pages
router.get("/adultCostumeBeginner", ensureAuth, postsController.getAdultCostumeBeginner)
router.get("/adultCostumeEasy", ensureAuth, postsController.getAdultCostumeEasy)
router.get("/adultCostumeNormal", ensureAuth, postsController.getAdultCostumeNormal)
router.get("/adultCostumeHard", ensureAuth, postsController.getAdultCostumeHard)
router.get("/adultCostumeExpert", ensureAuth, postsController.getAdultCostumeExpert)



module.exports = router;
