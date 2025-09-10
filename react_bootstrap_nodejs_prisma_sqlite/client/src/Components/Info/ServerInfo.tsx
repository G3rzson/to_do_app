import { useGlobalContext } from "../../Hooks/useGlobalContext";

export default function ServerInfo() {
  const { info, serverError } = useGlobalContext();
  return (
    <>
      {info && (
        <p
          className="bg-success text-light m-0 p-3 rounded"
          style={{ position: "absolute", bottom: 0 }}
        >
          {info}
        </p>
      )}

      {serverError && (
        <p
          className="bg-danger text-light m-0 p-3 rounded"
          style={{ position: "absolute", bottom: 0 }}
        >
          {serverError}
        </p>
      )}
    </>
  );
}
