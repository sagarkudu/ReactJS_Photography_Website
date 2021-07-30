import React from "react";

//here name is passed as category filter name.
const CategoryButton = ({ categoryName, handleSetCategory, categoryActive }) => {
  return (
    <>
      <button
        className={`category_name ${categoryActive ? "menu_active" : null}`}
        onClick={() => handleSetCategory(categoryName)}
      >
        {categoryName.toUpperCase()}
      </button>
    </>
  );
};

export default CategoryButton;
