const router = require("express").Router();
const {
  getUrlController,
  deleteUrl,
  postUrl,
} = require("../controllers/controllers");

router.get("get-url", getUrlController);

router.delete("delete", deleteUrl);

router.post("/posts", postUrl);

module.exports = router;
