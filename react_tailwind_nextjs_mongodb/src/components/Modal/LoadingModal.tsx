import Loading from "../Loader/Loading";

type ModalProps = {
  isOpen: boolean;
};

export default function LoadingModal({ isOpen }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Háttér blur réteg */}
      <div className={`absolute inset-0 backdrop-blur-sm bg-black/30`} />

      {/* Modal tartalom */}
      <div
        className={`relative z-10 flex items-center justify-center transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <Loading />
      </div>
    </div>
  );
}
