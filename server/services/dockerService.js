const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const tempPath = path.join(__dirname, "..", "temp");

if (!fs.existsSync(tempPath)) {
  fs.mkdirSync(tempPath);
}

const runCodeInDocker = (filename, language, code) => {
  return new Promise((resolve) => {
    const filePath = path.join(tempPath, filename);
    fs.writeFileSync(filePath, code);

    const command = `docker run --rm -v "${tempPath}:/code/submissions" code-runner ${language}`;

    exec(command, (err, stdout, stderr) => {
      if (err || stderr) {
        resolve({ success: false, output: stderr || err.message });
      } else {
        resolve({ success: true, output: stdout });
      }
    });
  });
};

module.exports = runCodeInDocker;
