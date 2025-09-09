import { useGlobalContext } from "../../Hooks/useGlobalContext";

export default function Modal() {
  const { modalInfo, modalOpen, setModalOpen } = useGlobalContext();
  return (
    <div className="container">
      <div
        className={`modal fade ${modalOpen ? "show d-block" : ""}`}
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content d-flex flex-row align-items-center justify-content-between">
            <div className="modal-body">{modalInfo}</div>
            <button
              className="btn-close pe-4"
              onClick={() => setModalOpen(false)}
            ></button>
          </div>
        </div>
      </div>
      {modalOpen && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}
