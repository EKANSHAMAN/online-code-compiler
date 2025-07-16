import Editor from "@monaco-editor/react";

function CodeEditor({ code, language, handleCodeChange }) {
  return (
    <Editor
      height="400px"
      language={language}
      value={code}
      onChange={handleCodeChange}
      theme="vs-dark"
    />
  );
}

export default CodeEditor;
