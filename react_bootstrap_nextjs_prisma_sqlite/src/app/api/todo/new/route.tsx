import { prisma } from "@/db/prisma";
import { todoFormSchema } from "@/validation/todoForm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Request JSON body-t olvasunk
    const body = await req.json();

    const { task } = body;

    const result = todoFormSchema.safeParse({ task: task });
    if (!result.success) {
      return NextResponse.json({
        error:
          result.error.flatten().fieldErrors.task?.[0] ?? "Érvénytelen adat",
      });
    }

    await prisma.todo.create({
      data: {
        task: result.data.task,
      },
    });

    return NextResponse.json({
      message: "Feladat sikeresen létrehozva!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Hiba történt, próbáld újra később!" },
      { status: 500 }
    );
  }
}
