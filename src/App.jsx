import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth, Home, Menu, Orders } from "./pages";
import Header from "./components/shared/Header";
import Tables from "./pages/Tables";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/auth", element: <Auth /> },
    { path: "/orders", element: <Orders /> },
    { path: "/tables", element:< Tables/> },
    { path: "/menu", element:< Menu/>},
    { path: "*", element: <div>404-NOT FOUND</div> },
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
