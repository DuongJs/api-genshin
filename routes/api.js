const router = require("express").Router();
const { getLink1 } = require("../controllers/char");
const { getLink2 } = require("../controllers/cos");

router.get("/char", getLink1);
router.get("/cos", getLink2);

module.exports = router;