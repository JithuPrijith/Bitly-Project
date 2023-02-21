const router = require("express").Router()
const { getUrlController, deleteUrl } = require("../controllers/controllers");

router.get("get-url", getUrlController);

router.delete("delete", deleteUrl);


module.exports = router ;