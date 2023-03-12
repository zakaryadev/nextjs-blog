import React from "react";
import Link from "next/link";
import { getCategories } from "services";

const Header = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b-2 w-full inline-block py-8">
        <div className="md:float-left block">
          <Link
            href="/"
            className="cursor-pointer font-semibold text-4xl text-slate-50"
          >
            Zak Blog
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <span className="md:float-right mt-2 align-middle ml-5 font-semibold text-xl cursor-pointer text-slate-50 hover:opacity-70">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
