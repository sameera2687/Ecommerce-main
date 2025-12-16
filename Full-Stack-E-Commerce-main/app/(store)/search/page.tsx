import NoProductsFound from "@/components/NoProductsFound";
import ProductGrid from "@/components/ProductGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";
import type React from "react";
import type { FC } from "react";

interface SearchParams {
  searchParams: {
    query: string;
  };
}

const SearchPage: FC<SearchParams> = async ({
  searchParams,
}): Promise<JSX.Element> => {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);

  if (!products.length) {
    return <NoProductsFound />;
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Search results for {query}
        </h1>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default SearchPage;
