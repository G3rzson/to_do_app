"use client";

import { deleteTodo } from "@/actions/deleteTodo";
import { Dispatch, SetStateAction } from "react";

export async function handleDelete(
  id: string,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setErrorMsg: Dispatch<SetStateAction<string | null>>,
  setInfo: Dispatch<SetStateAction<string | null>>
) {
  try {
    setLoading(true);
    const result = await deleteTodo(id);
    if (result.error) {
      setErrorMsg(result.error);
    } else {
      setInfo(result.message!);
    }
  } catch (error) {
    if (error instanceof Error) {
      //console.log(error.message);
      setErrorMsg(error.message);
    }
  } finally {
    setLoading(false);
  }
}
