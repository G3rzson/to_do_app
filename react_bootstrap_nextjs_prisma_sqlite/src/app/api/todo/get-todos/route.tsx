import { prisma } from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const todos = await prisma.todo.findMany();

    return NextResponse.json({ todos });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Hiba történt, próbáld újra később!" });
  }
}
