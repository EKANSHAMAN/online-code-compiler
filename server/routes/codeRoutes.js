const express = require("express");
const router = express.Router();
const { runCode, fetchCodeById } = require("../controllers/codeController");

// Route to execute code
router.post("/run", runCode);

// Route to fetch shared code by ID
router.get("/code/:id", fetchCodeById);

module.exports = router;
