import Navlinks from "./Navlinks";

export default function Header() {
  return (
    <div className="w-full bg-zinc-800">
      <header className="sm:w-4/5 w-full mx-auto">
        <Navlinks />
      </header>
    </div>
  );
}
