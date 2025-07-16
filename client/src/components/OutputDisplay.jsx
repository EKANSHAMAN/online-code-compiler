function OutputDisplay({ output, shareableLink }) {
  return (
    <>
      {shareableLink && (
        <div style={{ marginTop: "1rem" }}>
          <h4>🔗 Shareable Link:</h4>
          <a href={shareableLink} target="_blank" rel="noreferrer">
            {shareableLink}
          </a>
        </div>
      )}

      <h3 style={{ marginTop: "2rem" }}>📤 Output:</h3>
      <pre
        style={{
          backgroundColor: "#1e1e1e",
          color: "#00ff90",
          padding: "1rem",
          borderRadius: "5px",
          whiteSpace: "pre-wrap",
          minHeight: "100px",
        }}
      >
        {output}
      </pre>
    </>
  );
}

export default OutputDisplay;
