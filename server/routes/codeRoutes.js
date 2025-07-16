const express = require("express");
const router = express.Router();
const { runCode, fetchCodeById } = require("../controllers/codeController");

router.post("/run", runCode);
router.get("/code/:id", fetchCodeById);

module.exports = router;
