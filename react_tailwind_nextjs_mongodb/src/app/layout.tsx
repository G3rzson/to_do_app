import type { Metadata } from "next";
import "./globals.css";
import { GlobalProvider } from "@/GlobalContext/GlobalProvider";

export const metadata: Metadata = {
  title: "To Do App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className="bg-zinc-900 text-zinc-200">
        <GlobalProvider>
          <div className="sm:w-4/5 w-full mx-auto p-4 relative h-screen">
            {children}
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
