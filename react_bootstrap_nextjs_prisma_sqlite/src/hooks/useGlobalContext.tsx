"use client";
import { GlobalContext } from "@/globalContext/GlobalContext";
import { useContext } from "react";

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
}
