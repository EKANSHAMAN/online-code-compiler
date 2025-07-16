const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

// Ensure the temp directory exists
const tempPath = path.join(__dirname, "..", "temp");
if (!fs.existsSync(tempPath)) {
  fs.mkdirSync(tempPath, { recursive: true });
}

const runCodeInDocker = (filename, language, code) => {
  return new Promise((resolve) => {
    try {
      const filePath = path.join(tempPath, filename);

      // Write code to temp file
      fs.writeFileSync(filePath, code);

      // Docker command to execute the code securely
      const command = `docker run --rm -v "${tempPath}:/code/submissions" code-runner ${language}`;

      exec(command, { timeout: 10000 }, (err, stdout, stderr) => {
        if (err) {
          return resolve({ success: false, output: stderr || err.message });
        }

        resolve({ success: true, output: stdout });
      });

    } catch (error) {
      resolve({ success: false, output: "Internal server error." });
    }
  });
};

module.exports = runCodeInDocker;
