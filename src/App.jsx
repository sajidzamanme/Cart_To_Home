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
import LoginPage from "./pages/LoginPage";
import AdminPanelPage from "./pages/AdminPanelPage";
import AddItemPage from "./pages/AddItemPage";
import EditItemPage from "./pages/EditItemPage";
import RemoveItemPage from "./pages/RemoveItemPage";
import EditForm from "./components/EditForm";
import ItemPage from "./pages/ItemPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="item/:id" element={<ItemPage />} />
      <Route index element={<HomePage />} />
      <Route path="signup-login" element={<LoginPage />} />
      <Route path="admin-panel" element={<AdminPanelPage />} />
      <Route path="admin-panel/add" element={<AddItemPage />} />
      <Route path="admin-panel/edit" element={<EditItemPage />} />
      <Route path="admin-panel/edit/form" element={<EditForm />} />
      <Route path="admin-panel/remove" element={<RemoveItemPage />} />
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
