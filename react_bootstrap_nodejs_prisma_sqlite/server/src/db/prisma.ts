import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // fejlesztés közben hasznos logolás
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
