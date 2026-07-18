import { RiShoppingCartLine } from "react-icons/ri";
import {useFetch} from '../hooks/useFetch'
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";
import {useTitle} from '../hooks/useTitle'



function ProductDetails() {
  const param = useParams()
  const dispatch = useDispatch()
  const {data, loading, error} = useFetch(`https://dummyjson.com/products/${param.id}`)

  useTitle(`${data?.title} Details | ShoppingEase`)
  if(loading){
    return(
      <section className="min-h-screen bg-slate-50 py-10 animate-pulse">
  <div className="mx-auto flex flex-col max-w-7xl gap-12 px-6 lg:grid-cols-2">

    
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <div className="mx-auto h-125 w-full rounded-lg bg-gray-200"></div>
    </div>

    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <div className="h-6 w-28 rounded-full bg-gray-200"></div>
      <div className="mt-6 h-10 w-3/4 rounded bg-gray-200"></div>
      <div className="mt-6 h-5 w-24 rounded bg-gray-200"></div>
      <div className="mt-8 flex gap-4">
        <div className="h-10 w-32 rounded bg-gray-200"></div>
        <div className="h-8 w-20 rounded bg-gray-200"></div>
      </div>
      <div className="mt-6 h-5 w-40 rounded bg-gray-200"></div>
      <div className="mt-10 space-y-3">
        <div className="h-4 w-full rounded bg-gray-200"></div>
        <div className="h-4 w-full rounded bg-gray-200"></div>
        <div className="h-4 w-5/6 rounded bg-gray-200"></div>
        <div className="h-4 w-2/3 rounded bg-gray-200"></div>
      </div>
      <div className="mt-10 h-12 w-48 rounded-lg bg-gray-200"></div>

    </div>

  </div>
</section>
    )
  }
  return (
<section className="min-h-screen bg-slate-100 py-10">
  <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

    <div className="grid lg:grid-cols-2 gap-12 p-10">
      <div className="flex items-center justify-center bg-slate-50 rounded-2xl">
        <img
          src={data?.thumbnail}
          alt={data?.title}
          className="h-125 object-contain hover:scale-105 duration-300"
        />
      </div>
      <div>

        <span className="inline-block rounded-full bg-blue-100 text-blue-600 px-4 py-1 capitalize">
          {data?.category}
        </span>

        <h1 className="mt-4 text-5xl font-bold">
          {data?.title}
        </h1>

        <p className="mt-2 text-xl text-gray-500">
          {data?.brand}
        </p>

        <div className="flex items-center gap-3 mt-5">
          ⭐⭐⭐⭐⭐
          <span>{data?.rating} / 5</span>
        </div>

        <div className="flex items-center gap-5 mt-6">
          <h2 className="text-5xl font-bold text-blue-600">
            ${data?.price}
          </h2>

          <span className="bg-green-100 text-green-700 rounded-lg px-3 py-1">
            {data?.discountPercentage}% OFF
          </span>
        </div>

        <p className="mt-5 text-green-600 font-semibold">
          ✔ {data?.availabilityStatus}
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold">
            Description
          </h3>

          <p className="mt-3 leading-8 text-gray-600">
            {data?.description}
          </p>
        </div>

        <div className="mt-10 flex gap-5">
          <button
            onClick={() => dispatch(addToCart(data))}
            className="rounded-xl bg-blue-600 px-10 py-3 text-white hover:bg-blue-700"
          >
            Add To Cart
          </button>
        </div>

      </div>

    </div>
    <div className="p-10">

      <h2 className="text-3xl font-bold mb-6">
        Product Specifications
      </h2>

      <div className="grid md:grid-cols-2 gap-x-20 gap-y-5">

        <div className="flex justify-between border-b pb-3">
          <span>Brand</span>
          <span>{data?.brand}</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Category</span>
          <span>{data?.category}</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Stock</span>
          <span>{data?.stock}</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>SKU</span>
          <span>{data?.sku}</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Weight</span>
          <span>{data?.weight} g</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Warranty</span>
          <span>{data?.warrantyInformation}</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Shipping</span>
          <span>{data?.shippingInformation}</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Return Policy</span>
          <span>{data?.returnPolicy}</span>
        </div>

      </div>

    </div>
   
    <div className="p-10">

      <h2 className="text-3xl font-bold mb-3">
        Product Tags
      </h2>

      <div className="flex flex-wrap gap-3">
        {data?.tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-4 py-2 text-blue-700"
          >
            #{tag}
          </span>
        ))}
      </div>

    </div>

    <div className="p-10">

      <h2 className="text-3xl font-bold mb-3">
        Customer Reviews
      </h2>

      <div className="space-y-6">

        {data?.reviews?.map((review, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg p-6 bg-gray-50"
          >
            <div className="flex justify-between">

              <h3 className="font-semibold text-lg">
                {review.reviewerName}
              </h3>

              <span className="text-yellow-500">
                ⭐ {review.rating}/5
              </span>

            </div>

            <p className="mt-4 text-gray-600">
              {review.comment}
            </p>

            <p className="mt-3 text-sm text-gray-400">
              {new Date(review.date).toLocaleDateString()}
            </p>

          </div>
        ))}

      </div>

    </div>

  </div>
</section>
  );
}

export default ProductDetails;