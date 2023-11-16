import { Outlet } from "react-router"
import TodoHeading from "./Heading"

export default function Layout() {
  return (
    <div>
      <TodoHeading />
      <Outlet />
    </div>
  );
}
