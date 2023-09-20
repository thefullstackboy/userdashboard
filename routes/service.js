const router = require("express").Router();
const serviceController = require('../controllers/serviceControllers');
const validation = require('../validation/validation');
const verifyToken = require('../middleware/auth')

router.get("/leads",verifyToken,serviceController.leadsList);
router.get("/sales",verifyToken,serviceController.salesList);
router.post("/register",validation.regValidation,serviceController.registerForm);
router.post("/login",validation.loginValidation,serviceController.loginForm);
router.post('/forgotpassword',validation.forgotPasswordValidation,serviceController.forgotPassword);
router.post("/reset-password/:id/:token",serviceController.restPassword)
router.put("/:productId", validation.priceValidation,serviceController.price_update)
router.get("/",verifyToken,serviceController.serviceList);


module.exports = router;