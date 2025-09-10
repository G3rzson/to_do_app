type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  page: number;
};

export default function Pagination({ setPage, totalPages, page }: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="d-flex gap-1 flex-wrap">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`btn d-flex align-items-center justify-content-center 
          ${page === index ? "btn-success" : "btn-outline-success"}`}
          style={{ width: "2rem", height: "2rem" }}
          onClick={() => setPage(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
