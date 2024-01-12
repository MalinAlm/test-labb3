import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Journal from "./pages/Journal";

function Root() {
  return (
    <>
      <nav>
        <ul id="navList">
          <li>
            <Link to="/" className="linkStyle">
              {" "}
              HOME
            </Link>
          </li>
          <li>
            <Link to="/journal" className="linkStyle">
              JOURNAL
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Journal />, path: "/journal" },
      ],
      element: <Root />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
