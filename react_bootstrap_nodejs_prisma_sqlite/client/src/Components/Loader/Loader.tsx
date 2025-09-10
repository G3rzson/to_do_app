export default function Loader() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "50vh" }}
    >
      <div
        className="spinner-border text-success"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
