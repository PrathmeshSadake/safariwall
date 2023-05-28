import axios from "axios";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "./context/UserContext";

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import MyBookings from "./pages/profile/MyBookings";
import MyAccomodations from "./pages/profile/MyAccomodations";
import MyProfile from "./pages/profile/MyProfile";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export default function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<IndexPage />} />
          <Route path='/profile' element={<ProfilePage />}>
            <Route path='/profile/me' element={<MyProfile />} />
            <Route
              path='/profile/my-accomodations'
              element={<MyAccomodations />}
            />
            <Route path='/profile/my-bookings' element={<MyBookings />} />
          </Route>
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </UserContextProvider>
  );
}
