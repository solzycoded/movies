import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

import Categories from "./pages/Categories";
import Category from "./pages/Category";

import Genres from "./pages/Genres";

import "./assets/css/app.css"

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* categories */}
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:category" element={<Category />} />

          {/* genres */}
          <Route path="genres" element={<Genres />} />
          {/* <Route path="genres/:category" element={<Genre />} /> */}

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;