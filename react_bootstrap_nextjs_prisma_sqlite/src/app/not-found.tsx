import Link from "next/link";

export default function notFound() {
  return (
    <div
      className="d-flex flex-column gap-5 align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <h1>404 | Page not found</h1>
      <Link href={"/"} className="btn btn-warning">
        Go to the Home page
      </Link>
    </div>
  );
}
