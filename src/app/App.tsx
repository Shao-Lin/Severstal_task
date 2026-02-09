import { Routes, Route } from "react-router-dom";
import MainPage from "@/pages/main/ui/MainPage";
import CreatePage from "@/pages/createTask/ui/CreatePage";
import EditPage from "@/pages/editTask/ui/EditPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/task/new" element={<CreatePage />} />
      <Route path="/task/:id" element={<EditPage />} />
    </Routes>
  );
}

export default App;
