const Code = require("../models/Code");
const runCodeInDocker = require("../services/dockerService");

exports.runCode = async (req, res) => {
  const { code, language } = req.body;

  let filename;
  if (language === "cpp") filename = "Main.cpp";
  else if (language === "python") filename = "main.py";
  else if (language === "java") filename = "Main.java";
  else return res.json({ output: "Unsupported language." });

  let savedCode;
  try {
    savedCode = await Code.create({ code, language });
  } catch (err) {
    console.error("❌ Failed to save code:", err.message);
  }

  const result = await runCodeInDocker(filename, language, code);
  const shareableLink = `http://localhost:5000/code/${savedCode._id}`;

  res.json({
    output: result.output,
    shareableLink,
  });
};

exports.fetchCodeById = async (req, res) => {
  try {
    const foundCode = await Code.findById(req.params.id);
    if (!foundCode) return res.status(404).json({ error: "Code not found." });
    res.json(foundCode);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch code." });
  }
};
