import { Home, Library } from "../components/library";
import '../styles/style.css';

export const SideBar = () => {
  return (
    <aside className="flex flex-col gap-sm grid-in-side">
      <Home></Home>
      <Library></Library>
    </aside>
  );
};