import { useEffect, useState } from "react";
import { useGlobalContext } from "../../Hooks/useGlobalContext";

export default function Info() {
  const { errorMsg, setErrorMsg, info, setInfo } = useGlobalContext();
  const [visible, setVisible] = useState(false);

  // ha változik az üzenet, akkor mutasd és 3 mp után rejtsd el
  useEffect(() => {
    if (errorMsg || info) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        // Üzenet törlése az animáció után
        setTimeout(() => {
          setErrorMsg(null);
          setInfo(null);
        }, 500);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMsg, info, setErrorMsg, setInfo]);

  if (!errorMsg && !info) return null;

  return (
    <div
      className={`w-80 text-center rounded py-4 absolute bottom-5 left-5 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      } ${
        errorMsg ? "bg-red-300 text-zinc-800" : "bg-green-300 text-zinc-800"
      }`}
    >
      <p className="text-xl">{errorMsg || info}</p>
    </div>
  );
}
