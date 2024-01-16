import { Board } from "./components/Board";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="root">
      <header className="header">
        <h1 className="text-xl bg-primary-light dark:bg-primary-dark dark:text-white p-2">Thullo</h1>
      </header>
      <Sidebar />
      <Board />
    </div>
  )
}
