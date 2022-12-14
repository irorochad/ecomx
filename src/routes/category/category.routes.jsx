import { useContext, useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import {CategoryContainer, Title} from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
     <Title>{category.toLocaleUpperCase()}</Title>
    <CategoryContainer>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
    </CategoryContainer>
    </>
  );
};

export default Category;
