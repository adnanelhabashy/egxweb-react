const Tooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "white",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          transition: "opacity 0.3s ease",
        }}
      >
        <p>{`Time: ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};
export default Tooltip;
