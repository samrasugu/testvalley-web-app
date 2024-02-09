import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomeScreen } from "./pages/Home"
import NavBar from "./components/NavBar"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
