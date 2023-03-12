import Link from "next/link";
import React from "react";
import { getCategories } from "services";

const Categories = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);
  return (
    <div>
      <h3 className="text-slate-100 text-xl mb-8 font-semibold border-b-2 pb-4">
        Categories
      </h3>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.id}>
          <h1 className="transition duration-100 text-sky-500 hover:text-sky-300 hover:underline font-semibold mb-8 pb-4 border-b">
            {category.name}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
