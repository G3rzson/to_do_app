import Header from "@/components/Header/Header";
import PageTitle from "@/components/PageTitle/PageTitle";
import { GlobalProvider } from "@/globalContext/GlobalProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";

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
      <body>
        <GlobalProvider>
          <Header />
          <PageTitle />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
