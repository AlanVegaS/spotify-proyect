import { Home, Library } from "../components/library";
import '../styles/style.css';

export const SideBar = () => {
  return (
    <aside className="side flex flex-col gap-sm">
      <Home></Home>
      <Library></Library>
    </aside>
  );
};  