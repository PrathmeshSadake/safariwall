import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}
