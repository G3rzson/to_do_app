import { prisma } from "@/db/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function DELETE(req: Request, { params }: Params) {
  const { id } = await params;
  console.log(id);

  try {
    // Ellenőrizzük, hogy létezik-e a Todo
    const existingTodo = await prisma.todo.findUnique({
      where: { id: id },
    });

    if (!existingTodo) {
      return NextResponse.json(
        { error: "A megadott Todo nem található" },
        { status: 404 }
      );
    }

    // Törlés
    await prisma.todo.delete({
      where: { id: id },
    });

    return NextResponse.json({ message: "Todo sikeresen törölve!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Hiba történt a törlés során!" },
      { status: 500 }
    );
  }
}
