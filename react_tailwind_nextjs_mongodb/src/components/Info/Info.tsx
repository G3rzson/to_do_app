"use client";
import { useGlobalContext } from "@/Hooks/useGlobalContext";
import { useEffect, useState } from "react";

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
      className={`text-center rounded p-4 absolute bottom-5 left-5 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      } ${
        errorMsg ? "bg-red-800 text-zinc-200" : "bg-green-800 text-zinc-200"
      }`}
    >
      <p className="text-xl">{errorMsg || info}</p>
    </div>
  );
}
