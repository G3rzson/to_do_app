"use client";
import { useGlobalContext } from "@/hooks/useGlobalContext";

export default function Info() {
  const { serverError, info } = useGlobalContext();

  if (!serverError && !info) return null;

  return (
    <div className="container">
      <div
        className={`rounded my-3 p-3 text-light ${
          serverError ? "bg-danger" : "bg-success"
        }`}
      >
        <p className="p-0 m-0">{serverError || info}</p>
      </div>
    </div>
  );
}
