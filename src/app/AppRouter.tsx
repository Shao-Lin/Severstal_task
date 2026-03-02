import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "@/pages/main/ui/MainPage";
import CreatePage from "@/pages/createTask/ui/CreatePage";
import EditPage from "@/pages/editTask/ui/EditPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/task/new" element={<CreatePage />} />
        <Route path="/task/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
};
