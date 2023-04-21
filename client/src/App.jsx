import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<IndexPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
