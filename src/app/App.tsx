import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "@/pages/mainPage/MainPage";
import CreatePage from "@/pages/changePages/CreatePage";
import EditPage from "@/pages/changePages/EditPage";

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
