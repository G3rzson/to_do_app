import { Link } from "react-router-dom";
import PageTitle from "../Components/PageTitle/PageTitle";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full">
      <PageTitle>Ez az oldal nem található!</PageTitle>
      <Link
        className="text-2xl text-zinc-900 bg-zinc-300 hover:bg-zinc-100 duration-300 text-center rounded cursor-pointer py-2 px-4"
        to={"/"}
      >
        Vissza a Főoldalra
      </Link>
    </div>
  );
}
