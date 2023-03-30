import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Host, Listing, Listings, NotFound, User } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/host' element={<Host />} />
        <Route exact path='/listing/:id' element={<Listing />} />
        <Route exact path='/listings/:location?' element={<Listings />} />
        <Route exact path='/user/:id' element={<User />} />
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/stripe' element={<Home />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
