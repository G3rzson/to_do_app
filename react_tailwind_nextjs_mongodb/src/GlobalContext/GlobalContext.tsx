"use client";
import { GlobalContextType } from "@/types/types";
import { createContext } from "react";

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);
