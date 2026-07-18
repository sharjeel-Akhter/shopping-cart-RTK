import {ProductCard} from "../Components";
import { useFetch } from "../hooks/useFetch";
import { RiLoader4Fill } from "react-icons/ri";
import { useSearchParams } from "react-router";

import {useTitle} from '../hooks/useTitle'

function Search() {
    const [searchParams] = useSearchParams();
    let queryTerm = searchParams.get('q');
    const {data:products, loading, error } = useFetch(`https://dummyjson.com/products/search?q=${queryTerm}`);
    useTitle(`Results for ${queryTerm} | ShoppingEase`)

    if (loading) {
  return (
    <div className="flex h-screen items-center justify-center">
      <RiLoader4Fill className="text-5xl animate-spin text-blue-600" />
    </div>
  );
}

    if(error){
      return(
      <div className="flex h-screen items-center justify-center">
      <p className="text-red-700 text-4xl">{error}</p>
    </div>
    )
  } 
    if(products?.length === 0){
      return(
      <div className="h-screen mt-10">
      <p className="text-gray-700 text-4xl flex justify-center">No products found for "{queryTerm}"</p>
    </div>
    )
    }
    return (
   
            <section className="m-auto py-7 max-w-7xl">
                
                <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  { products?.map((product)=>(
                        <ProductCard key={product.id} product={product}/>
                   ))}
                 
                </div>
            </section>
    );
}

export default Search;