import {Routes, Route} from "react-router-dom"

import "./styles.shop.scss";

import CategoriesPreview from "../categories-preview/categories-preview"




const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};
export default Shop;
