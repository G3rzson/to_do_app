type Props = {
  info: string | null;
  serverError: string | null;
};

export default function ServerInfo({ info, serverError }: Props) {
  return (
    <>
      <p
        className="text-success m-0"
        style={{ position: "absolute", bottom: "-1.5rem" }}
      >
        {info}
      </p>
      <p
        className="text-danger m-0"
        style={{ position: "absolute", bottom: "-1.5rem" }}
      >
        {serverError}
      </p>
    </>
  );
}
