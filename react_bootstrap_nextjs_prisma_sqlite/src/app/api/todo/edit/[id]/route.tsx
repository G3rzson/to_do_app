import { prisma } from "@/db/prisma";
import { todoFormSchema } from "@/validation/todoForm";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function PUT(req: Request, { params }: Params) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { task } = body;

    // Validáció
    const parsed = todoFormSchema.safeParse({ task });
    if (!parsed.success) {
      return NextResponse.json({
        error:
          parsed.error.flatten().fieldErrors.task?.[0] ?? "Érvénytelen adat",
      });
    }

    // Ellenőrizd, hogy létezik-e
    const existingTodo = await prisma.todo.findUnique({
      where: { id: id },
    });
    if (!existingTodo) {
      return NextResponse.json(
        { error: "A megadott Todo nem található" },
        { status: 404 }
      );
    }

    // Frissítés
    await prisma.todo.update({
      where: { id: id },
      data: {
        task: parsed.data.task,
      },
    });

    return NextResponse.json({ message: "Todo sikeresen frissítve!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Hiba történt a frissítés során!" },
      { status: 500 }
    );
  }
}
