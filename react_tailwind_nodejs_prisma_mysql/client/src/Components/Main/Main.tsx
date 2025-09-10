import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../Constans/Routes";
import Info from "../Info/Info";

export default function Main() {
  return (
    <main className="flex-grow relative p-4 w-4/5 mx-auto">
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Info />
    </main>
  );
}
