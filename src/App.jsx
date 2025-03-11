import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth, Home, Orders } from "./pages";
import Header from "./components/shared/Header";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/auth", element: <Auth /> },
    { path: "/orders", element: <Orders /> },
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
