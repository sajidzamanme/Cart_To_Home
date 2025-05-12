import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import axios from "axios";
import useItemStore from "./stores/useItemStore";
import { useEffect } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  const itemStore = useItemStore();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("/api/items.json");
        itemStore.setItems(response.data.items);
      } catch (error) {
        console.log("An error occured while fetching data", error);
      }
    };
    fetch();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
