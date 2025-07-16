function LanguageSelector({ language, setLanguage }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label><strong>Select Language:</strong></label>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="cpp">C++</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
