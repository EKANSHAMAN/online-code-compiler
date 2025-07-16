function RunButton({ handleRun }) {
  return (
    <button
      onClick={handleRun}
      style={{
        marginTop: "1rem",
        padding: "0.5rem 1rem",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      ▶️ Run Code
    </button>
  );
}

export default RunButton;
